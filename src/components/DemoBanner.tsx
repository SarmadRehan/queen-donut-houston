import { shop } from "@/data/shop";

export function DemoBanner() {
  return (
    <p className="bg-ink px-4 py-2 text-center text-sm font-semibold tracking-wide text-cream">
      {shop.demoNotice}
    </p>
  );
}
