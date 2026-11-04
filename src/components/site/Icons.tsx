export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

export function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d={dir === "left" ? "M12 4 6 10l6 6" : "m8 4 6 6-6 6"} />
    </svg>
  );
}

export function Scallop() {
  return (
    <svg aria-hidden="true" className="hero-scallop" preserveAspectRatio="none" viewBox="0 0 1440 88">
      <path d="M0 88V66C35 66 38 26 74 26s45 40 88 40 52-56 100-56 48 56 96 56 52-30 94-30 45 30 83 30 44-66 91-66 48 66 96 66 44-42 88-42 48 42 91 42 47-54 91-54 45 54 89 54 43-28 80-28 44 28 78 28 42-50 83-50 46 50 90 50 45-32 88-32v54Z" />
    </svg>
  );
}
