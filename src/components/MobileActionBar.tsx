import { phoneHref, shop } from "@/data/shop";

import { OrderButton } from "./OrderDialog";

/** Thumb-reachable call and order buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t-4 border-berry bg-cocoa p-3 md:hidden">
      <a
        href={phoneHref(shop.phone)}
        className="rounded-full border-2 border-cream py-3 text-center font-bold text-cream"
      >
        Call
      </a>
      <OrderButton className="rounded-full bg-berry py-3 text-center font-bold text-cream">
        Order Ahead
      </OrderButton>
    </div>
  );
}
