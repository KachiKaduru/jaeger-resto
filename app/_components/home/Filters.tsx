"use client";

import { filterData } from "@/app/data/filtersData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  filter: string;
};

export default function Filters({ filter }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("menu", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="w-full overflow-auto">
      <ul className="flex gap-4 sm:gap-8 font-semibold text-sm sm:text-lg">
        {filterData.map((item) => (
          <button
            key={item.title}
            onClick={() => handleFilter(item.filter)}
            className={`hover:cursor-pointer pb-3 min-w-fit ${
              filter === item.filter ? "border-b-2 border-[#EA7C69] text-[#EA7C69]" : ""
            }`}
          >
            {item.title}
          </button>
        ))}
      </ul>
    </div>
  );
}
