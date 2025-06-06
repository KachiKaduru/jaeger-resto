"use client";

import { ChildrenProps } from "@/app/types/childrenProps";
import SettingsSidebar from "./SettingsSidebar";
import { usePathname } from "next/navigation";

export default function SettingsContent({ children }: ChildrenProps) {
  const pathname = usePathname();
  const isBaseSettings = pathname === "/settings";

  // console.log(isBaseSettings);
  return (
    <main className="grid sm:grid-cols-[auto_1fr] gap-6">
      <SettingsSidebar className={`${isBaseSettings ? "block" : "hidden"} sm:block`} />

      <section
        className={`bg-[#1F1D2B] rounded-xl calc-height min-w-full ${
          isBaseSettings ? "hidden" : "block"
        } sm:block`}
      >
        {children}
      </section>
    </main>
  );
}
