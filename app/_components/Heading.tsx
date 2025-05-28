type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}
