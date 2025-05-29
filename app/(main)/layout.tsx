import Sidebar from "../_components/Sidebar";
import { ChildrenProps } from "../types/childrenProps";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <section className="grid grid-cols-[auto_1fr] bg-[#252836] text-white h-[100dvh]">
      <Sidebar />

      <main className="p-6 overflow-y-auto">{children}</main>
    </section>
  );
}
