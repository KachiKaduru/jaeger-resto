"use client";

import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";
import { Message } from "../types/singleMessage";

export function useRealtimeMessages() {
  const [messages, setMessages] = useState<Message[]>([]); // Local state for messages

  useEffect(() => {
    // Open a WebSocket-like channel to listen to new inserts in the 'messages' table
    const channel = supabase
      .channel("messages") // Any unique identifier
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]); // Add new message to state
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel); // Clean up when the component unmounts
    };
  }, []);

  return messages;
}
