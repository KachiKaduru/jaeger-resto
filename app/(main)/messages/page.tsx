import Heading from "@/app/_components/Heading";
import { messages } from "@/app/data/messagesData";
import { formatDate } from "@/app/helpers/dateFormatter";
// import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-full gap-2">
      <Heading>Messages</Heading>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-[#1F1D2B] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{msg.sender_name}</span>
              <span className="text-xs text-gray-400">{formatDate(msg.created_at)}</span>
            </div>
            <p className="text-sm">{msg.content}</p>
          </div>
        ))}
      </div>

      {/* <form onSubmit={handleSendMessage} className="mt-4 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-[#393C49] text-white placeholder:text-gray-400"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
          Send
        </button>
      </form> */}
    </div>
  );
}
