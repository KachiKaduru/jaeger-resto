// data/messages.ts

import { v4 as uuidv4 } from "uuid";

export const messages = [
  {
    id: uuidv4(),
    sender_name: "Chef Levi",
    content: "Order #102 is ready for pickup.",
    created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Admin Armin",
    content: "Meeting at 3 PM today to discuss weekend prep.",
    created_at: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Front Desk Sasha",
    content: "Customer reported a missing dessert from Order #110.",
    created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Chef Jean",
    content: "We're out of mozzarella, someone please restock!",
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Manager Hange",
    content: "New policy: sanitize all surfaces every 3 hours.",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Waiter Connie",
    content: "Order #115 needs to be corrected — wrong drink served.",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Admin Armin",
    content: "System update complete. All services back online.",
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Chef Levi",
    content: "Reminder: New dish tasting session tomorrow.",
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Front Desk Mikasa",
    content: "VIP customer arriving at 7 PM. Table 3 reserved.",
    created_at: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    sender_name: "Manager Hange",
    content: "Weekly report has been sent to everyone's inbox.",
    created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
];
