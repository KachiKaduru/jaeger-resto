import Filters from "@/app/_components/Filters";
import Heading from "@/app/_components/Heading";
import { todayDate } from "@/app/helpers/dateFormatter";

export default function Homepage() {
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
      </main>
    </section>
  );
}
