import { Square } from "ldrs/react";
import "ldrs/react/Square.css";

export default function Spinner() {
  return (
    <div className="grid place-content-center h-screen w-full">
      <Square size="35" stroke="5" strokeLength="0.25" bgOpacity="0.1" speed="1.2" color="black" />
    </div>
  );
}
