import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./_styles/globals.css";

const barlow = Barlow({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jaeger",
    default: "Jaeger Resto",
  },
  description: "Order your top exquisite dishes and feel like royalty!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  );
}
