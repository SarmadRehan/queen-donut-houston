// [x, y, rotation, color] for one tile of the repeating sprinkle pattern.
const sprinkles: [number, number, number, string][] = [
  [10, 10, 30, "#d6304f"],
  [34, 26, -20, "#3fa7d6"],
  [56, 8, 70, "#f2b632"],
  [78, 24, 10, "#4caf6a"],
  [100, 12, -50, "#fff7ec"],
  [20, 32, 80, "#f2b632"],
  [66, 34, -70, "#d6304f"],
  [112, 32, 40, "#3fa7d6"],
  [46, 18, 0, "#fff7ec"],
  [90, 4, 60, "#4b2a1c"],
];

// A CSS background tile rather than an inline <pattern>, so the strip can repeat on a page
// without duplicate SVG ids.
const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40">${sprinkles
  .map(
    ([x, y, rotate, color]) =>
      `<rect x="${x}" y="${y}" width="10" height="3.5" rx="1.75" fill="${color}" transform="rotate(${rotate} ${x + 5} ${y + 1.75})"/>`,
  )
  .join("")}</svg>`;

const backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(tile)}")`;

/** A strip of frosting and rainbow sprinkles used between sections. Decorative only. */
export function Sprinkles() {
  return <div className="h-10 bg-frosting" style={{ backgroundImage }} aria-hidden="true" />;
}
