import Image from "next/image";

import { heroImage, phoneHref, pressQuote, shop } from "@/data/shop";

import { OrderButton } from "./OrderDialog";
import { Sunburst } from "./Sunburst";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream">
      <Sunburst className="text-ray/45" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full bg-cocoa px-4 py-1.5 text-sm font-bold tracking-wide text-cream">
            Ella &amp; W 18th · {shop.neighborhood}, Houston
          </p>
          <h1 id="hero-title" className="mt-6">
            <span className="block font-script text-5xl text-cocoa sm:text-6xl">You deserve a</span>
            <span className="sign-letters mt-1 block font-display text-7xl text-berry sm:text-8xl">
              DONUT.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            The best little donut shop around. Glazed, sprinkled and jelly-filled donuts, fritters,
            kolaches and savory meat donuts, every morning from 6 AM.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <OrderButton className="w-full rounded-full bg-berry px-7 py-3.5 text-lg font-bold text-cream shadow-[4px_4px_0_#4b2a1c] transition-transform hover:-translate-y-0.5 sm:w-auto">
              Order a Dozen Ahead
            </OrderButton>
            <a
              href={phoneHref(shop.phone)}
              className="w-full rounded-full border-2 border-cocoa bg-cream px-7 py-3 text-center text-lg font-bold text-cocoa transition-colors hover:bg-dough sm:w-auto"
            >
              Call {shop.phone}
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-full border-8 border-cocoa shadow-[10px_10px_0_#d6304f]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 -rotate-2 rounded-2xl border-2 border-cocoa bg-cream px-5 py-3 text-center shadow-[4px_4px_0_#4b2a1c] sm:left-auto sm:right-0 sm:w-72 sm:translate-x-0">
            <span className="block font-bold leading-snug text-cocoa">
              &ldquo;{pressQuote.quote}&rdquo;
            </span>
            <span className="mt-1 block text-sm text-muted">
              {pressQuote.source}, {pressQuote.year}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
