import Heading from "@/app/_components/Heading";
import SettingsSidebar from "@/app/_components/settings/SettingsSidebar";
import { ChildrenProps } from "@/app/types/childrenProps";

export default function SettingsLayout({ children }: ChildrenProps) {
  return (
    <section className="h-[100dvh] flex flex-col gap-y-6">
      <header>
        <Heading>Settings</Heading>
      </header>

      <main className="grid grid-cols-[auto_1fr] gap-6">
        <SettingsSidebar />

        <section className="bg-[#1F1D2B] rounded-xl calc-height">{children}</section>
      </main>
    </section>
  );
}
