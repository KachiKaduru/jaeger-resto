import Filters from "@/app/_components/home/Filters";
import Heading from "@/app/_components/Heading";
import { todayDate } from "@/app/helpers/dateFormatter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MealsList from "@/app/_components/home/MealsList";
import { Metadata } from "next";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata: Metadata = {
  title: "Home",
};

type HomepageProps = {
  searchParams: {
    menu?: string;
  };
};

export default async function Homepage({ searchParams }: HomepageProps) {
  const { menu } = await searchParams;
  const filter = menu ?? "all";

  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row gap-3 sm:gap-1 justify-between sm:items-center">
        <div>
          <Heading>Jaeger Resto</Heading>
          <p>{todayDate()}</p>
        </div>

        <div className="flex gap-3 items-center bg-[#2D303E] border border-[#393C49] rounded-md p-2.5 sm:p-3.5">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input
            type="search"
            name="search"
            placeholder="Search for meals, drinks, etc."
            className="w-full"
          />
        </div>
      </header>

      <main className="space-y-6">
        <Filters filter={filter} />

        <Suspense fallback={<Spinner />} key={filter}>
          <MealsList filter={filter} />
        </Suspense>
      </main>
    </section>
  );
}
