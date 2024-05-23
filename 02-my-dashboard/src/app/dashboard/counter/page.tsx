import { CartCounter } from "@/app/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Count on me!",
};

export default function CounterPage() {
  return (
    <>
      <CartCounter value={20} />
    </>
  );
}
