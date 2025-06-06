import OrderReport from "@/app/_components/dashboard/OrderReport";
import StatCard from "@/app/_components/dashboard/StatCard";
import Heading from "@/app/_components/Heading";
import { statsArray } from "@/app/data/statcardsData";
import { todayDate } from "@/app/helpers/dateFormatter";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <header className="border-b border-[#393C49] pb-6">
        <Heading>Dashboard</Heading>
        <p>{todayDate()}</p>
      </header>

      <main className="space-y-6">
        <div className="flex gap-6 overflow-auto">
          {statsArray.map((item) => (
            <StatCard item={item} key={item.title} />
          ))}
        </div>

        <div>
          <OrderReport />
        </div>
      </main>
    </section>
  );
}
