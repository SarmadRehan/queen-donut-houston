type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`font-script text-3xl ${dark ? "text-frosting" : "text-berry"}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-1 font-display text-4xl text-balance sm:text-5xl ${dark ? "text-cream" : "text-cocoa"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-cream/80" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
