import SettingsSidebar from "@/app/_components/settings/SettingsSidebar";
import { ChildrenProps } from "@/app/types/childrenProps";

export default function SettingsLayout({ children }: ChildrenProps) {
  return (
    <section>
      <SettingsSidebar />

      <main>{children}</main>
    </section>
  );
}
