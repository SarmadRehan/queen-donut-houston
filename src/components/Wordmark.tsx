type WordmarkProps = {
  tone?: "light" | "dark";
};

/** Type-set logo in the sign's two lettering styles; there is no clean logo file to use. */
export function Wordmark({ tone = "dark" }: WordmarkProps) {
  const onDark = tone === "dark";
  return (
    <span className="inline-flex items-center gap-2 leading-none">
      <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#f7b3c6" stroke="#4b2a1c" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="5" fill="#fff7ec" stroke="#4b2a1c" strokeWidth="2.5" />
        <path d="M9 11l2 1M21 8l2-1M24 17l1 2M11 22l-1 2M18 24h2" stroke="#d6304f" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col">
        <span className={`font-script text-2xl ${onDark ? "text-frosting" : "text-cocoa"}`}>Queen</span>
        <span className="-mt-1 font-display text-xl tracking-wide text-berry">
          DONUT{" "}
          <span className={`font-sans text-[0.6rem] font-extrabold tracking-[0.3em] ${onDark ? "text-cream" : "text-cocoa"}`}>
            HOUSTON
          </span>
        </span>
      </span>
    </span>
  );
}
