import {
  BellIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  LockClosedIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/outline";

export const settingsSidebarArr = [
  {
    id: 1,
    href: "/settings/appearance",
    title: "Appearance",
    description: "App theme, font size, etc.",
    icon: HeartIcon,
  },
  {
    id: 2,
    href: "/settings/restaurant",
    title: "Your Restaurant",
    description: "Your locations, live photos, etc.",
    icon: BuildingStorefrontIcon,
  },
  {
    id: 3,
    href: "/settings/products",
    title: "Products Management",
    description: "Manage your restaurants' menu, prices, etc.",
    icon: PercentBadgeIcon,
  },
  {
    id: 4,
    href: "/settings/notifications",
    title: "Notifications",
    description: "Customize your notification preferences",
    icon: BellIcon,
  },
  {
    id: 5,
    href: "/settings/security",
    title: "Security",
    description: "change/update your passwords, PIN, email address",
    icon: LockClosedIcon,
  },
];
