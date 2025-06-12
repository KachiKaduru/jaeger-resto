"use client";

import { supabase } from "@/app/_lib/supabase";
import { useState } from "react";

export default function MessageForm() {
  const [content, setContent] = useState("");

  const sendMessage = async () => {
    await supabase.from("messages").insert({
      sender: "Kachman",
      content,
    });
    setContent(""); // Clear the input after sending
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}

// import { useState } from "react";

// export default function MessageForm() {
//   const [message, setMessage] = useState("");

//   function handleSubmit(e: any) {
//     e.preventDefault();
//     console.log(message);

//     setMessage("");
//   }

//   return (
//     <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
//       <input
//         className="flex-1 p-2 border rounded"
//         placeholder="Type a message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Send
//       </button>
//     </form>
//   );
// }
