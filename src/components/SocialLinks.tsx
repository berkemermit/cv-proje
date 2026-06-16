import { socialLinks, activeSocialKeys, type SocialKey } from "@/data/site.config";

type SocialLinksProps = {
  labels: Record<SocialKey, string>;
  className?: string;
  buttonClassName?: string;
};

export function SocialLinks({
  labels,
  className = "flex flex-wrap gap-3",
  buttonClassName = "min-h-[2.75rem] rounded-full border border-border px-5 py-2 text-sm text-muted transition-colors hover:border-[var(--accent-contact)]/40 hover:text-[var(--accent-contact)]",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {activeSocialKeys.map((key) => (
        <a
          key={key}
          href={socialLinks[key]}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className={buttonClassName}
        >
          {labels[key]}
        </a>
      ))}
    </div>
  );
}
