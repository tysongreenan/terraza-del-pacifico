import { Facebook, Instagram } from "lucide-react";

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/terrazadelpacificocr/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TerrazadelPacifico",
    Icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@terrazadelpacifico",
    Icon: (props: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={props.className}
      >
        <path d="M16.5 3c.36 2.3 1.86 4.06 4.5 4.32v2.82c-1.53.15-2.87-.35-4.43-1.29v5.66c0 5.78-6.3 7.59-8.83 3.44-1.62-2.67-.62-7.36 4.6-7.55v2.97c-.4.06-.82.16-1.21.3-1.16.42-1.82 1.16-1.64 2.46.36 2.5 4.94 3.23 4.56-1.65V3h2.45Z" />
      </svg>
    ),
  },
] as const;
