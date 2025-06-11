"use client";

import { useRealtimeMessages } from "@/app/_hooks/useRealtimeMessages";
// import { useRealtimeMessages } from "@/app/_hooks/useRealtimeMessages";
// import { messages } from "@/app/data/messagesData";
// import { formatDate } from "@/app/helpers/dateFormatter";
import { Message } from "@/app/types/singleMessage";

type Props = {
  messagesData?: Message[];
};

export default function MessagesContent({ messagesData }: Props) {
  //   const realTimeMesasages = useRealtimeMessages();
  //   console.log(realTimeMesasages);

  //   return (
  //     <div className="flex-1 overflow-y-auto space-y-4">
  //       {messagesData.map((msg) => (
  //         <div key={msg.id} className="bg-[#1F1D2B] p-4 rounded-lg">
  //           <div className="flex items-center justify-between mb-1">
  //             <span className="text-sm font-medium">{msg.sender}</span>
  //             <span className="text-xs text-gray-400">{formatDate(msg.created_at)}</span>
  //           </div>
  //           <p className="text-sm">{msg.content}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );

  const messages = useRealtimeMessages(); // Real-time messages from Supabase

  return (
    <div className="space-y-4 p-4">
      {messages.map((msg) => (
        <div key={msg.id} className="border p-2 rounded bg-gray-100 dark:bg-gray-800">
          <p className="font-semibold">{msg.sender}</p>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}
