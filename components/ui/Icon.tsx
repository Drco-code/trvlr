"use client";
type Props = { name: string; className?: string; size?: number };

export default function Icon({ name, className = "w-5 h-5", size = 20 }: Props) {
  const common = {
    width: size,
    height: size,
    strokeWidth: 1.75,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "plane":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 10.5l7.5-2.2L21 4 16.5 21l-4-6.5L7 18l1-4 6.5-9.5-4 5.5L3 10.5z" />
          <path d="M12.5 14.5l4-6.5" opacity={0.9} />
        </svg>
      );
    case "file-badge":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 13.5h5M9 16.5h4" />
          <circle cx="17.5" cy="17.5" r="3.5" fill="white" stroke="currentColor" />
          <path d="M15.8 17.5l1.4 1.4 2.1-2.6" strokeWidth={1.6} />
        </svg>
      );
    case "building":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 21V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14" />
          <path d="M3 9h18M7 9v12M12 9v12M17 9v12" />
          <path d="M7 13h2M15 13h2M7 17h2M15 17h2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 6.5L9 3l6 3.5L21 3v13.5l-6 3.5-6-3.5L3 20V6.5z" />
          <path d="M9 3v13.5M15 6.5V20" />
          <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" opacity={0.22} />
          <path d="M15.2 8.8l-2.6 5.6-2.4-1.2-1.2-2.4 6.2-2z" fill="currentColor" stroke="none" opacity={0.9} />
          <path d="M15.2 8.8l-2.6 5.6-3.6-3.6z" fill="none" stroke="currentColor" />
        </svg>
      );
    case "bus":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="13" rx="2.2" />
          <path d="M4 11.5h16M7 17.5h10" />
          <circle cx="8.5" cy="14.2" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="14.2" r="1" fill="currentColor" stroke="none" />
          <path d="M8 4V3M16 4V3" />
        </svg>
      );
    case "car":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M5.5 13l1.6-4.2a1 1 0 0 1 .9-.7h8a1 1 0 0 1 .9.7L18.5 13" />
          <path d="M3 14.5h18v2.6a1.4 1.4 0 0 1-1.4 1.4h-.9a1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1-1.8 1.8H8.9A1.8 1.8 0 0 1 7.1 16.7 1.8 1.8 0 0 1 5.3 18.5H4.4A1.4 1.4 0 0 1 3 17.1v-2.6z" />
          <circle cx="8" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="16" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2l7.5 3.6v5.2c0 4.2-2.6 7.1-7.5 9.7-4.9-2.6-7.5-5.5-7.5-9.7V5.6L12 2z" />
          <path d="M8.5 11.5l2.2 2.2 4.8-4.8" strokeWidth={1.65} />
        </svg>
      );
    case "book":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="4" y="3" width="14" height="18" rx="1.4" />
          <path d="M18 7.5h1.2a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H6" opacity={0.5} />
          <path d="M8 9h8M8 12.5h8M8 16h5" opacity={0.85} />
          <circle cx="13.5" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 4L2 9l10 5.5L22 9z" />
          <path d="M6 11.5v3.2l6 3.3 6-3.3v-3.2" />
          <path d="M22 9v5" opacity={0.55} />
        </svg>
      );
    case "users":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="9" cy="8.5" r="3" />
          <path d="M2.5 18.5c0-2.8 2.3-5 5.5-5s5.5 2.2 5.5 5" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M14.8 18.5c0-1.9 1.2-3.4 3.2-3.9 1.3-.3 2.5.1 3.1 1.1l.4.8v1H14.8z" />
        </svg>
      );
    case "users-round":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="2.6" />
          <circle cx="17.2" cy="8.2" r="1.9" />
          <circle cx="12.2" cy="13.6" r="1.3" />
          <path d="M2.8 19.5c0-2.3 1.9-4.2 4.7-4.7" />
          <path d="M14.5 14.8c2.4.4 4.2 1.9 4.7 4.7H8.5" opacity={0.7} />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="3" y="7.5" width="18" height="11" rx="1.6" />
          <path d="M8.5 7.5V6a3.5 3.5 0 0 1 7 0v1.5" />
          <path d="M3 11.5h18" />
          <circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "crown":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 14.5l3.6-6 3.8 4.2L14.6 8.5l3.4 6" />
          <path d="M3 14.5h18v3.2H3z" />
          <path d="M6.6 8.5l-1-2M12 7l0-1.8M17.4 8.5l1-2" opacity={0.65} />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 18.8l-5.9-5.9a3.8 3.8 0 0 1 5.4-5.4L12 8.1l.5-.6a3.8 3.8 0 0 1 5.4 5.4L12 18.8z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="6" cy="5.5" r="2" />
          <circle cx="18" cy="18.5" r="2" />
          <path d="M7.8 7.2c1.2 1.1 2.8 1.6 4.5 1.4 1.7-.2 3.2-.9 4.6-2" strokeDasharray="2 2" />
          <path d="M12.2 8.6V14l2.2 1.6M9.8 14.2l2.4-1.6" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="6" />
          <path d="M15.4 15.4l4.6 4.6" strokeWidth={1.65} />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M6 9.2l6 6 6-6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M5 12h12.5" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M5.5 12.5l4.2 4.2 8.8-9" strokeWidth={1.65} />
        </svg>
      );
    case "star":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 3.2l2 4.3 4.7.7-3.4 3.3.8 4.6L12 14l-4.1 2.1.8-4.6L5.3 8.2l4.7-.7L12 3.2z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M6.1 4.5A1.6 1.6 0 0 1 7.7 3H10l2 4.4-2.7 2A15 15 0 0 0 15 15l2-2.7L21.5 14v2.3a1.6 1.6 0 0 1-1.6 1.6h-.6C10.5 17.9 6 12.4 6.1 4.5z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="3" y="5.5" width="18" height="13" rx="1.6" />
          <path d="M3.5 6.2l9 6.3 9-6.3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v5l3 1.8" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 21.5s6.5-5.1 6.5-10.2A6.5 6.5 0 1 0 5.5 11.3C5.5 16.4 12 21.5 12 21.5z" />
          <circle cx="12" cy="11.3" r="2.2" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.5" />
          <circle cx="12" cy="12" r="3.7" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M13.8 21V13.9h2.6l.4-3H13.8V9.1c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.8H7.2v3h3.1V21h3.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9 12h6" />
        </svg>
      );
  }
}
