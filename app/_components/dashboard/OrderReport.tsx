import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ReportTable from "./ReportTable";

export default function OrderReport() {
  return (
    <section className="p-6 bg-[#1F1D2B] rounded-xl space-y-4">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Order Report</h2>

        <div className="flex items-center gap-3 border border-[#393C49] rounded-lg py-3 px-3.5">
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
          <h4 className="font-medium text-lg">Filter Order</h4>
        </div>
      </header>

      <ReportTable />
    </section>
  );
}
