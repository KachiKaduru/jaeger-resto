"use client";

import { useState } from "react";
import { sendMessage } from "@/app/_lib/data-service";

export default function MessageForm() {
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage("Kachi", content);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Type a message..."
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}
