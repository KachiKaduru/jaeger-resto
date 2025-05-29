type MealProps = {
  meal: {
    id: string;
    name: string;
    created_at: string;
    price: number;
    description: string;
    image: string;
    category: string;
    second_category: string;
  };
};

export default function SingleMeal({ meal }: MealProps) {
  const { name, price } = meal;

  return (
    <div className="bg-[#1F1D2B] rounded-2xl border border-[#ccc]">
      <div>image here{/* <img src="" alt="" /> */}</div>

      <h3>{name}</h3>

      <h4>{price}</h4>
    </div>
  );
}
