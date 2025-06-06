import Sidebar from "../_components/Sidebar";
import { ChildrenProps } from "../types/childrenProps";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <section className="grid grid-rows-[1fr_auto] sm:grid-cols-[auto_1fr] sm:grid-rows-1 bg-[#252836] text-white h-[100dvh]">
      <Sidebar />

      <main className="p-4 sm:p-6 mt-4 overflow-y-auto">{children}</main>
    </section>
  );
}
