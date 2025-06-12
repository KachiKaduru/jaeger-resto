"use client";

import { useState } from "react";
import { sendMessage } from "@/app/_lib/data-service";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function MessageForm() {
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage("Kachi", content);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 py-2 px-4 border rounded-xl"
        placeholder="Type a message..."
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex w-fit items-center gap-1">
        {/* <span>Send</span> */}
        <PaperAirplaneIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
