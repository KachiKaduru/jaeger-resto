import SingleMeal from "../SingleMeal";
import { getAllMeals } from "@/app/_lib/data-service";

type Props = {
  filter: string;
};

export default async function MealsList({ filter }: Props) {
  const meals = await getAllMeals();
  const displayedMeals =
    filter === "all" ? meals : meals.filter((meal) => meal.category.toLowerCase() === filter);

  return (
    <section className="grid gap-x-7 gap-y-6 grid-cols-200px">
      {displayedMeals.map((meal) => (
        <SingleMeal key={meal.id} meal={meal} />
      ))}
    </section>
  );
}
