type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle: string;
  accent: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  accent,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 min-w-0 sm:mb-14">
      <p
        className="mb-2 text-xs font-semibold uppercase tracking-wider sm:text-sm sm:tracking-[0.25em]"
        style={{ color: accent }}
      >
        {label}
      </p>
      <h2 className="break-words font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-lg text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
