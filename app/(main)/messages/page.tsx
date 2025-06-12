import Heading from "@/app/_components/Heading";
import MessageForm from "@/app/_components/messages/MessageForm";
import MessagesContent from "@/app/_components/messages/MessagesContent";
import { getMessages } from "@/app/_lib/data-service";

export const revalidate = 0;

export default async function MessagesPage() {
  const messagesData = await getMessages();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-full gap-2">
      <Heading>Messages</Heading>

      {/* <MessagesContent /> */}
      <MessagesContent messagesData={messagesData} />

      <MessageForm />
    </div>
  );
}
