import {
  BellIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

export const sidebarNav = [
  {
    href: "/home",
    title: "Home",
    icon: HomeModernIcon,
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
