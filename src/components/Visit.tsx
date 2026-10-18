import { directionsUrl, hours, hoursNote, phoneHref, shop } from "@/data/shop";

import { SectionHeading } from "./SectionHeading";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="visit-title"
          eyebrow="Come on by"
          title="Find Us in the Heights"
          intro="Walk-in, grab a box and go."
        />

        <div className="mt-14 grid overflow-hidden rounded-3xl border-2 border-cocoa bg-white shadow-[6px_6px_0_#4b2a1c] lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <h3 className="font-display text-2xl text-cocoa">{shop.name}</h3>
            <address className="mt-3 text-lg not-italic leading-relaxed">
              {shop.street}
              <br />
              {shop.city}, TX {shop.postalCode}
              <br />
              <span className="text-muted">{shop.crossStreets}</span>
            </address>

            <div className="mt-4 flex flex-col gap-2 font-semibold">
              <a href={phoneHref(shop.phone)} className="w-fit hover:text-berry">
                {shop.phone}
              </a>
              <a href={`mailto:${shop.email}`} className="w-fit break-all hover:text-berry">
                {shop.email}
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-berry underline underline-offset-4 hover:text-berry-deep"
              >
                Get directions
              </a>
            </div>

            <h4 className="mt-8 text-sm font-extrabold uppercase tracking-[0.2em] text-muted">Hours</h4>
            <dl className="mt-2 divide-y divide-cocoa/10">
              {hours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-4 py-2.5">
                  <dt className="font-bold">{entry.days}</dt>
                  <dd className="text-muted">{entry.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-xl bg-dough px-4 py-3 text-sm font-semibold text-cocoa">
              {hoursNote}
            </p>
          </div>

          <iframe
            title="Map of Queen Donut Houston on W 18th St"
            src={shop.mapEmbedUrl}
            className="h-80 w-full border-0 border-t-2 border-cocoa lg:h-full lg:min-h-[28rem] lg:border-t-0 lg:border-l-2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
