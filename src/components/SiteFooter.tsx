import { hours, phoneHref, shop } from "@/data/shop";

import { Sprinkles } from "./Sprinkles";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-cocoa-deep text-cream/80">
      <Sprinkles />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{shop.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-frosting">Visit</h2>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {shop.street}
            <br />
            {shop.city}, TX {shop.postalCode}
            <br />
            <a href={phoneHref(shop.phone)} className="hover:text-frosting">
              {shop.phone}
            </a>
            <br />
            <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-frosting">
              Facebook
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-frosting">Hours</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {hours.map((entry) => (
              <li key={entry.days}>
                {entry.days}: {entry.hours}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-cream/60">Hours may vary.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 text-xs sm:px-6 md:pb-10">
        <p className="border-t border-cream/10 pt-6">{shop.demoNotice}</p>
      </div>
    </footer>
  );
}
