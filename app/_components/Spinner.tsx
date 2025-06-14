import { Square } from "ldrs/react";
import "ldrs/react/Square.css";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full min-h-[50dvh]">
      <Square
        size="35"
        stroke="5"
        strokeLength="0.25"
        bgOpacity="0.1"
        speed="1.2"
        color="#9d9d9d"
      />
    </div>
  );
}
