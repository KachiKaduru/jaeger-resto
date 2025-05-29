import { ChildrenProps } from "../types/childrenProps";

export default function Heading({ children }: ChildrenProps) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}
