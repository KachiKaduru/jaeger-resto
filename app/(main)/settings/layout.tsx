import Heading from "@/app/_components/Heading";
import SettingsContent from "@/app/_components/settings/SettingsContent";
import { ChildrenProps } from "@/app/types/childrenProps";

export default function SettingsLayout({ children }: ChildrenProps) {
  return (
    <section className="h-[100dvh] flex flex-col gap-y-6">
      <header>
        <Heading>Settings</Heading>
      </header>

      <SettingsContent>{children}</SettingsContent>
    </section>
  );
}
