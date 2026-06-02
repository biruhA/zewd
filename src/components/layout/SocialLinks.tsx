import React from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export const socialLinksData: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z"></path>
        <path d="M22 2 11 13"></path>
      </svg>
    ),
  },
];

export default function SocialLinks({
  className = "flex items-center gap-6",
  iconClassName = "w-5 h-5 text-[#0a1d2d] dark:text-white fill-none stroke-current hover:opacity-80 transition-opacity",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinksData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex items-center justify-center"
        >
          {React.cloneElement(social.icon as React.ReactElement<any>, {
            className: `${iconClassName}`,
          })}
        </a>
      ))}
    </div>
  );
}
