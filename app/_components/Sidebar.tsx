"use client";

import Link from "next/link";
import Logo from "./Logo";
import { sidebarNav } from "../data/sidebarData";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#1F1D2B]">
      <div className="flex gap-2">
        <Logo />
        <h2 className="mb-4">Resto</h2>
      </div>

      <ul>
        {sidebarNav.map((nav) => (
          <li key={nav.title}>
            <Link href={nav.href} className="flex items-center justify-center w-24 h-24">
              <div
                className={`grid place-content-center w-14 h-14 rounded-xl text-[#EA7C69] hover:text-white hover:bg-[#EA7C69] ${
                  pathname === nav.href ? "text-white bg-[#EA7C69]" : ""
                }`}
              >
                <nav.icon className=" w-6 h-6" />
              </div>

              {/* <span>{nav.title}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
