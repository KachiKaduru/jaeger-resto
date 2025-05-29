// type StatusType = "completed" | "preparing" | "pending";

type OrderProps = {
  order: {
    customer: string;
    meal: string;
    quantity: number;
    price: number;
    status: string;
  };
};

export default function OrderTableRow({ order }: OrderProps) {
  const { customer, meal, price, quantity, status } = order;

  return (
    <div className="table-row py-3">
      <p>{customer}</p>
      <p>{meal}</p>
      <p className="text-center">{quantity}</p>
      <p className="text-center">$ {price * quantity}</p>
      <p className="text-center">{status}</p>
    </div>
  );
}
