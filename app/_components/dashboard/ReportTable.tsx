import { ordersData } from "@/app/data/ordersData";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

export default function ReportTable() {
  return (
    <section>
      <OrderTableHeader />

      <div>
        {ordersData.map((order) => (
          <OrderTableRow key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}
