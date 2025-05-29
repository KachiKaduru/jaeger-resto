import Filters from "@/app/_components/Filters";
import Heading from "@/app/_components/Heading";
import SingleMeal from "@/app/_components/SingleMeal";
import { getAllMeals } from "@/app/_lib/data-service";
import { todayDate } from "@/app/helpers/dateFormatter";

export default async function Homepage() {
  const meals = await getAllMeals();

  // console.log(meals);

  return (
    <section>
      <header className="flex justify-between items-center">
        <div>
          <Heading>Jaeger Resto</Heading>
          <p>{todayDate()}</p>
        </div>

        <div>
          <input type="search" name="search" id="" placeholder="search for a dish here" />
        </div>
      </header>

      <main>
        <Filters />

        <div className="grid gap-x-7 gap-y-6 grid-cols-200px">
          {meals.map((meal) => (
            <SingleMeal key={meal.id} meal={meal} />
          ))}
        </div>
      </main>
    </section>
  );
}
