"use client";

import { useRealtimeMessages } from "@/app/_hooks/useRealtimeMessages";
import { Message } from "@/app/types/singleMessage";
import { useEffect, useMemo, useRef } from "react";

type Props = {
  messagesData?: Message[];
};

export default function MessagesContent({ messagesData = [] }: Props) {
  const messages = useRealtimeMessages(); // Real-time messages from Supabase
  const displayedMessages = useMemo(() => [...messagesData, ...messages], [messagesData, messages]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedMessages]);

  return (
    <div className="space-y-4 p-4 flex flex-col items-end overflow-auto">
      {displayedMessages.map((msg) => (
        <div key={msg.id} className="border py-2 px-4 rounded-xl bg-gray-700 max-w-[60dvw]">
          <p className="font-semibold">{msg.sender}</p>
          <p>{msg.content}</p>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
