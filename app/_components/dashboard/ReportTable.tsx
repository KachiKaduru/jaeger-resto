import { ordersData } from "@/app/data/ordersData";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

export default function ReportTable() {
  return (
    <section className="overflow-auto">
      <OrderTableHeader />

      <div>
        {ordersData.map((order) => (
          <OrderTableRow key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}
