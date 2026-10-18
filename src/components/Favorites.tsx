import Image from "next/image";

import { favorites } from "@/data/shop";

import { SectionHeading } from "./SectionHeading";

export function Favorites() {
  const withPhotos = favorites.filter((item) => item.image);
  const textOnly = favorites.filter((item) => !item.image);

  return (
    <section id="favorites" aria-labelledby="favorites-title" className="bg-dough py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="favorites-title"
          eyebrow="From the case"
          title="Heights Favorites"
          intro="What neighbors and reviewers come back for."
        />

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {withPhotos.map((item) => (
            <li key={item.name}>
              <article className="h-full overflow-hidden rounded-3xl border-2 border-cocoa bg-cream shadow-[6px_6px_0_#4b2a1c]">
                {item.image && (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 768px) 34rem, 92vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="border-t-2 border-cocoa p-6">
                  <h3 className="font-display text-2xl text-cocoa">{item.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {textOnly.map((item) => (
            <li key={item.name} className="rounded-3xl border-2 border-cocoa/15 bg-cream p-6">
              <span aria-hidden="true" className="block h-1.5 w-12 rounded-full bg-berry" />
              <h3 className="mt-4 font-display text-xl text-cocoa">{item.name}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
