const tableHeadings = [
  { heading: "Customer", position: "left" },
  { heading: "Meal", position: "left" },
  { heading: "Quantity", position: "center" },
  { heading: "Total Price", position: "center" },
  { heading: "Status", position: "center" },
];

export default function OrderTableHeader() {
  return (
    <header className="table-row border-b border-[#393C49] pb-3">
      {tableHeadings.map((heading) => (
        <h2
          key={heading.heading}
          className={`font-semibold text-lg ${heading.position === "center" ? "text-center" : ""}`}
        >
          {heading.heading}
        </h2>
      ))}
    </header>
  );
}
