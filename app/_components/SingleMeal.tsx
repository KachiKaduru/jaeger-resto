import Image from "next/image";

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
  const { name, price, image } = meal;

  return (
    <div className="bg-[#1F1D2B] rounded-2xl p-6 flex flex-col items-center">
      <div className="relative w-36 h-36">
        <Image src={image} alt={name} fill className="object-cover object-center rounded-[50%]" />
      </div>

      <h3 className="text-sm font-semibold mt-4 text-center">{name}</h3>

      <h4 className="text-sm">${price}</h4>
    </div>
  );
}
