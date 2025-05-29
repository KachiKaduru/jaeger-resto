import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function StatCard() {
  return (
    <div className="bg-[#1F1D2B] rounded-lg p-4 space-y-2 min-w-[200px]">
      <header className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#252836] grid place-content-center">
          <CurrencyDollarIcon className="w-6 h-6 text-purple-400" />
        </div>
        <p>Rate %</p>
      </header>

      <h2 className="font-semibold text-[28px]">Figures 000</h2>

      <p className="text-[#ABBBC2] text-sm font-medium">Total Revenue</p>
    </div>
  );
}
