import type { SVGProps } from "react";

export type IconName =
  | "shield"
  | "target"
  | "zap"
  | "trending"
  | "mapPin"
  | "heart"
  | "users"
  | "award"
  | "dollar"
  | "check"
  | "briefcase"
  | "graduation"
  | "book"
  | "star"
  | "send"
  | "paw"
  | "home"
  | "moon"
  | "sun"
  | "sprout"
  | "phone"
  | "mail"
  | "clock"
  | "arrowRight"
  | "menu"
  | "close"
  | "chevronDown"
  | "facebook"
  | "instagram"
  | "youtube";

const paths: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  trending: (
    <>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="14 6 21 6 21 13" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  heart: <path d="M12 21s-7.5-4.9-10-9.8C.6 7.4 2.6 4 6.3 4c2 0 3.6 1 5.7 3.2C14.1 5 15.7 4 17.7 4c3.7 0 5.7 3.4 4.3 7.2C19.5 16.1 12 21 12 21Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M21.5 20c0-2.6-1.9-4.8-4.4-5.6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5.2" />
      <path d="M8.5 12.8 7 22l5-3 5 3-1.5-9.2" />
    </>
  ),
  dollar: (
    <>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 2.8c0 4 10 1.7 10 5.9 0 1.9-2.2 3.3-5 3.3s-5-1.4-5-3.3" />
    </>
  ),
  check: <polyline points="4 12.5 9.5 18 20 6" />,
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11.5V17c0 1.6 2.7 3 6 3s6-1.4 6-3v-5.5" />
    </>
  ),
  book: <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" />,
  star: <path d="M12 2.5 15 9l7 .8-5.2 4.9L18.3 21 12 17.4 5.7 21l1.5-6.3L2 9.8 9 9l3-6.5Z" />,
  send: <path d="M21 3 3 10.5l7 3 3 7L21 3Z" />,
  paw: (
    <>
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="17" cy="8" r="2.2" />
      <path d="M8 14c-2.8 0-4.5 2-4.5 4a3 3 0 0 0 3 3c1.7 0 2.5-1 5.5-1s3.8 1 5.5 1a3 3 0 0 0 3-3c0-2-1.7-4-4.5-4-2 0-2.7 1.2-5 1.2S10 14 8 14Z" />
    </>
  ),
  home: <path d="M4 11 12 4l8 7v8.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5V11Z" />,
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </>
  ),
  sprout: <path d="M12 21V11m0 0c0-4-3-6.5-7-6.5C5 8.5 8 11 12 11Zm0 0c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5Z" />,
  phone: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l4 2.5" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  menu: (
    <>
      <line x1="3.5" y1="6.5" x2="20.5" y2="6.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <line x1="3.5" y1="17.5" x2="20.5" y2="17.5" />
    </>
  ),
  close: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  chevronDown: <polyline points="5 8 12 15 19 8" />,
  facebook: <path d="M14 21v-7h2.4l.4-3H14V9c0-.9.2-1.5 1.6-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H8.5v3H11v7h3Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
  ...props
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
