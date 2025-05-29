import { settingsSidebarArr } from "@/app/data/settingsSidebarData";
import Link from "next/link";

export default function SettingsSidebar() {
  return (
    <nav className="bg-[#1F1D2B] calc-height">
      <ul className="flex flex-col gap-4">
        {settingsSidebarArr.map((item) => (
          <li key={item.id} className="hover:bg-[#ea7c6942]">
            <Link href={item.href}>
              <div className="flex gap-4 items-center">
                <item.icon className="w-4 h-4" />
                <p>{item.title}</p>
              </div>
              <div>{item.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
