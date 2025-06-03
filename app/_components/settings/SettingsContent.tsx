"use client";

import { ChildrenProps } from "@/app/types/childrenProps";
import SettingsSidebar from "./SettingsSidebar";
import { usePathname } from "next/navigation";

export default function SettingsContent({ children }: ChildrenProps) {
  const pathname = usePathname();
  const isBaseSettings = pathname === "/settings";

  console.log(isBaseSettings);
  // ${isBaseSettings ? "block" : "hidden"}
  return (
    <main className="grid grid-cols-[auto_1fr] gap-6">
      <SettingsSidebar />

      <section className="bg-[#1F1D2B] rounded-xl calc-height min-w-full">{children}</section>
    </main>
  );
}
