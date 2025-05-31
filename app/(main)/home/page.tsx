import Filters from "@/app/_components/home/Filters";
import Heading from "@/app/_components/Heading";
import { getAllMeals } from "@/app/_lib/data-service";
import { todayDate } from "@/app/helpers/dateFormatter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MealsList from "@/app/_components/home/MealsList";

export default async function Homepage() {
  const meals = await getAllMeals();

  // console.log(searchParams);
  // console.log(meals);

  return (
    <section className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <Heading>Jaeger Resto</Heading>
          <p>{todayDate()}</p>
        </div>

        <div className="flex gap-3 items-center bg-[#2D303E] border border-[#393C49] rounded-md p-3.5">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input type="search" name="search" id="" placeholder="Search for meals, drinks, etc." />
        </div>
      </header>

      <main className="space-y-6">
        <Filters />

        <MealsList meals={meals} />
      </main>
    </section>
  );
}
