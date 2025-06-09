import Heading from "@/app/_components/Heading";
import { notifications } from "@/app/data/notificationsData";
import { formatDate } from "@/app/helpers/dateFormatter";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Heading>Notifications</Heading>
        <button className="text-sm text-primary hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start p-4 rounded-lg ${
              notif.read ? "bg-[#1F1D2B]" : "bg-[#EA7C6942]"
            }`}
          >
            <BellIcon className="w-6 h-6 text-primary mr-3 mt-1" />
            <div className="flex-1">
              <p className="text-sm">{notif.message}</p>
              <span className="text-xs text-gray-400">{formatDate(notif.created_at)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
