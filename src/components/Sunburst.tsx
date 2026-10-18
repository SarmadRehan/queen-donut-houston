const RAY_COUNT = 28;

// Wedges from the center out past the corners of a 100x100 box, alternating with gaps.
const rays = Array.from({ length: RAY_COUNT / 2 }, (_, index) => {
  const step = (Math.PI * 2) / RAY_COUNT;
  const start = index * 2 * step;
  const end = start + step;
  const reach = 150;
  const point = (angle: number) =>
    `${(50 + Math.cos(angle) * reach).toFixed(2)},${(50 + Math.sin(angle) * reach).toFixed(2)}`;
  return `50,50 ${point(start)} ${point(end)}`;
});

type SunburstProps = {
  className?: string;
};

/** The radiating rays behind the lettering on the shop's sign. Decorative only. */
export function Sunburst({ className = "" }: SunburstProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      {rays.map((points) => (
        <polygon key={points} points={points} fill="currentColor" />
      ))}
    </svg>
  );
}
