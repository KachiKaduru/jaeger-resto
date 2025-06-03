"use client";

import { settingsSidebarArr } from "@/app/data/settingsSidebarData";
import Link from "next/link";

export default function SettingsSidebar() {
  return (
    <nav className={`bg-[#1F1D2B] calc-height rounded-xl `}>
      <ul className="grid gap-1">
        {settingsSidebarArr.map((item) => (
          <li key={item.id} className="hover:bg-[#ea7c6942] hover:text-[#ea7c69] p-6 nav-item">
            <Link href={item.href}>
              <div className="flex gap-4 items-center">
                <item.icon className="w-4 h-4" />
                <p className="">{item.title}</p>
              </div>
              <p className="desc text-sm">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
