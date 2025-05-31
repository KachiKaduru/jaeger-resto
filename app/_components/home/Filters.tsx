const filterData = [
  { title: "All Menu", filter: "All" },
  { title: "Starter", filter: "Starter" },
  { title: "Lunch", filter: "Lunch" },
  { title: "Dinner", filter: "Dinner" },
  { title: "Drinks", filter: "Drinks" },
  { title: "Sweets", filter: "Sweets" },
  { title: "Fruits", filter: "Fruits" },
];

export default function Filters() {
  return (
    <div>
      <ul className="flex gap-8 font-semibold text-lg">
        {filterData.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
