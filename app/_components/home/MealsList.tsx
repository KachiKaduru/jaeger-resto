import { Meal } from "@/app/types/meal";
import SingleMeal from "../SingleMeal";

type MealsArray = {
  meals: Meal[];
};

export default function MealsList({ meals }: MealsArray) {
  return (
    <section className="grid gap-x-7 gap-y-6 grid-cols-200px">
      {meals.map((meal) => (
        <SingleMeal key={meal.id} meal={meal} />
      ))}
    </section>
  );
}
