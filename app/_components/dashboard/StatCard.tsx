import { StatItem } from "@/app/data/statcardsData";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

type Props = {
  item: StatItem;
};

export default function StatCard({ item }: Props) {
  const { title, rate, iconColor, figure } = item;

  return (
    <div className="bg-[#1F1D2B] rounded-lg p-4 space-y-2 min-w-[200px]">
      <header className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#252836] grid place-content-center">
          <item.icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <p className="text-green-400">+ {rate}%</p>
        <ArrowUpIcon className="w-5 h-5 bg-green-900 text-green-400 p-1 rounded-[50%]" />
      </header>

      <h2 className="font-semibold text-[28px]">{figure}.00</h2>

      <p className="text-[#ABBBC2] text-sm font-medium">Total {title}</p>
    </div>
  );
}
