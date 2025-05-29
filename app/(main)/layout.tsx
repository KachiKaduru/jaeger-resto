import Sidebar from "../_components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <section className="grid grid-cols-[auto_1fr] bg-[#252836] text-white">
      <Sidebar />

      <main className="p-6">{children}</main>
    </section>
  );
}
