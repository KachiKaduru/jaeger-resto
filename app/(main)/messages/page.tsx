import Heading from "@/app/_components/Heading";
import MessageForm from "@/app/_components/messages/MessageForm";
import MessagesContent from "@/app/_components/messages/MessagesContent";
import { getMessages } from "@/app/_lib/data-service";

export default async function MessagesPage() {
  const messagesData = await getMessages();

  return (
    <div className="flex flex-col h-full gap-2">
      <Heading>Messages</Heading>

      {/* <MessagesContent /> */}
      <MessagesContent messagesData={messagesData} />

      <MessageForm />
    </div>
  );
}
