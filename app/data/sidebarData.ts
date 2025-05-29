import {
  BellIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const sidebarNav = [
  {
    href: "/home",
    title: "Home",
    icon: HomeIcon,
  },
  {
    href: "/dashboard",
    title: "Dashboard",
    icon: ChartPieIcon,
  },
  {
    href: "/messages",
    title: "Messages",
    icon: EnvelopeIcon,
  },
  {
    href: "/notifications",
    title: "Notifications",
    icon: BellIcon,
  },
  {
    href: "/settings",
    title: "Settings",
    icon: Cog6ToothIcon,
  },
];
