import { BookmarkIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";

export type StatItem = {
  title: string;
  // icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  rate: number;
  figure: number;
};

export const statsArray: StatItem[] = [
  {
    title: "Revenue",
    icon: CurrencyDollarIcon,
    iconColor: "text-[#9288E0]",
    rate: 7.24,
    figure: 230560,
  },
  {
    title: "Dishes Ordered",
    icon: BookmarkIcon,
    iconColor: "text-[#FFB572]",
    rate: 12.65,
    figure: 1135,
  },
  {
    title: "Customers",
    icon: UserGroupIcon,
    iconColor: "text-[#65B0F6]",
    rate: 32.4,
    figure: 205,
  },
];
