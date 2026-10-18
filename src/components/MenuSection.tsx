import { menu, phoneHref, shop } from "@/data/shop";

import { SectionHeading } from "./SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="Fresh every morning"
          title="What's in the Case"
          intro="Donuts by the each or by the dozen, plus pastries and kolaches."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {menu.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`menu-${group.id}`}
              className="rounded-3xl border-2 border-cocoa bg-white p-7"
            >
              <h3 id={`menu-${group.id}`} className="font-display text-2xl text-berry">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-semibold text-cocoa">
                    <span aria-hidden="true" className="size-3 shrink-0 rounded-full border-2 border-cocoa bg-frosting" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-muted">
          Prices aren&apos;t listed online. Call{" "}
          <a href={phoneHref(shop.phone)} className="font-bold text-cocoa underline underline-offset-4">
            {shop.phone}
          </a>{" "}
          to check what&apos;s fresh.
        </p>
      </div>
    </section>
  );
}
