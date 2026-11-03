/** WhatsApp mark: green disc, white speech bubble and handset. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="32" r="32" fill="#25D366" />
      <g transform="translate(11 10.5) scale(1.3)">
        <path
          d="M27.2 15.5a11.2 11.2 0 0 1-16.6 9.8L4 27l1.8-6.4A11.2 11.2 0 1 1 27.2 15.5Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2 10.5c.3-.7.7-.7 1-.7h.8c.3 0 .5.1.7.5l1.2 2.8c.1.3.1.5-.1.8l-.9 1.1c-.2.2-.2.4 0 .7.8 1.4 1.9 2.5 3.3 3.3.3.2.5.2.7-.1l1.1-1.3c.2-.3.5-.3.8-.2l2.6 1.2c.3.2.5.3.5.6 0 .4-.2 1.7-1.2 2.4-.8.6-1.8.9-3 .6-1.2-.3-2.8-.9-4.8-2.7-1.6-1.4-2.7-3.1-3-4.4-.4-1.3-.1-2.7.3-3.6Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
