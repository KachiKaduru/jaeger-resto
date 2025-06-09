// data/notifications.ts

import { v4 as uuidv4 } from "uuid";

export const notifications = [
  {
    id: uuidv4(),
    message: "New order received: Order #123",
    category: "Order",
    read: false,
    created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
  },
  {
    id: uuidv4(),
    message: "Meal 'Spaghetti Bolognese' updated",
    category: "Menu",
    read: true,
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "Order #119 marked as completed",
    category: "Order",
    read: false,
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "Admin changed restaurant hours",
    category: "System",
    read: false,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "Dish 'Grilled Chicken' deleted by Kitchen staff",
    category: "Menu",
    read: true,
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "PIN successfully updated",
    category: "Security",
    read: true,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "New comment added to Order #130",
    category: "Order",
    read: false,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "Notification preferences updated",
    category: "Settings",
    read: true,
    created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "Product 'Caesar Salad' moved to 'Specials'",
    category: "Menu",
    read: false,
    created_at: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    message: "System backup completed successfully",
    category: "System",
    read: true,
    created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
];
