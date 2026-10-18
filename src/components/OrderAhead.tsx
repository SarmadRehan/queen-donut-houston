import { phoneHref, shop } from "@/data/shop";

import { OrderButton } from "./OrderDialog";
import { Sunburst } from "./Sunburst";

const steps = [
  { title: "Build your dozen", text: "Mix glazed, sprinkle, cake and filled." },
  { title: "Add kolaches", text: "Round out the box for the office or the team." },
  { title: "Pick a time", text: "Swing by and grab it, already boxed." },
];

export function OrderAhead() {
  return (
    <section
      id="order-ahead"
      aria-labelledby="order-ahead-title"
      className="relative overflow-hidden bg-cocoa py-20 text-cream sm:py-24"
    >
      <Sunburst className="text-cocoa-deep/60" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="inline-block rounded-full bg-frosting px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.2em] text-cocoa">
          Coming soon
        </p>
        <h2 id="order-ahead-title" className="mt-5 font-display text-4xl text-balance sm:text-5xl">
          Dozens &amp; Kolaches, Ordered Ahead
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
          Online ordering is on the way. Until then, call ahead and we&apos;ll have your order
          ready.
        </p>

        <ol className="mt-12 grid gap-5 text-left sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border-2 border-cream/20 bg-cocoa-deep/70 p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-berry font-display text-lg">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-1 text-cream/75">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <OrderButton className="w-full rounded-full bg-berry px-7 py-3.5 text-lg font-bold text-cream shadow-[4px_4px_0_#2e1a11] transition-transform hover:-translate-y-0.5 sm:w-auto">
            Start an Order
          </OrderButton>
          <a
            href={phoneHref(shop.phone)}
            className="w-full rounded-full border-2 border-cream px-7 py-3 text-center text-lg font-bold transition-colors hover:bg-cream hover:text-cocoa sm:w-auto"
          >
            Call {shop.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
