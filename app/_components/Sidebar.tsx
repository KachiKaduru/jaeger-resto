import Link from "next/link";
import Logo from "./Logo";
import { sidebarNav } from "../data/sidebarData";

export default function Sidebar() {
  return (
    <aside className="bg-[#1F1D2B]">
      <div className="flex gap-2">
        <Logo />
        <h2 className="mb-4">Resto</h2>
      </div>

      <ul>
        {sidebarNav.map((nav) => (
          <li key={nav.title}>
            <Link href={nav.href}>
              <div className="grid place-content-center w-14 h-14 rounded-md">
                <nav.icon className="text-[#EA7C69] w-6 h-6" />
              </div>

              <span>{nav.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
