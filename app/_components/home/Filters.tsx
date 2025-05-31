"use client";

import { filterData } from "@/app/data/filtersData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("menu", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <ul className="flex gap-8 font-semibold text-lg">
        {filterData.map((item) => (
          <button key={item.title} onClick={() => handleFilter(item.filter)}>
            {item.title}
          </button>
        ))}
      </ul>
    </div>
  );
}
