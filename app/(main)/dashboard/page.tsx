import OrderReport from "@/app/_components/dashboard/OrderReport";
import StatCard from "@/app/_components/dashboard/StatCard";
import Heading from "@/app/_components/Heading";
import { todayDate } from "@/app/helpers/dateFormatter";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <header className="border-b border-[#393C49] pb-6">
        <Heading>Dashboard</Heading>
        <p>{todayDate()}</p>
      </header>

      <main className="space-y-6">
        <div className="flex gap-6">
          <StatCard />
          <StatCard />
          <StatCard />
        </div>

        <div>
          <OrderReport />
        </div>
      </main>
    </section>
  );
}
