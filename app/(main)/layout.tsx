import Sidebar from "../_components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <section className="grid grid-cols-[auto_1fr] bg-[#252836] h-screen text-white">
      <Sidebar />

      <main>
        <header>
          <h1 className="mb-4">Header Content</h1>
        </header>

        <section>
          <h2>Main content</h2>
          {children}
        </section>
      </main>
    </section>
  );
}
