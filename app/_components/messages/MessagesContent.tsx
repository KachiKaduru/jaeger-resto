"use client";

import { useRealtimeMessages } from "@/app/_hooks/useRealtimeMessages";
import { Message } from "@/app/types/singleMessage";

type Props = {
  messagesData?: Message[];
};

export default function MessagesContent({ messagesData = [] }: Props) {
  const messages = useRealtimeMessages(); // Real-time messages from Supabase
  const displayedMessages = [...messagesData, ...messages];

  return (
    <div className="space-y-4 p-4">
      {displayedMessages.map((msg) => (
        <div key={msg.id} className="border p-2 rounded bg-gray-100 dark:bg-gray-800">
          <p className="font-semibold">{msg.sender}</p>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}
