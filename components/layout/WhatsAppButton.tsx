"use client";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-soft fixed bottom-5 right-5 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:scale-[1.04] md:bottom-6 md:right-6"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15l-1 4 4.2-1.1A10 10 0 1 0 12 2z" />
        <path d="M8.5 9.5c.2-1 1.1-.9 1.4-.9l.7 2.2-1.1 1.1c1.1 1.8 2.9 3.1 4.9 3.9l1-1.2 2 1c0 .4-.3 1.2-1 1.4-1.6.5-3.6-.1-5.6-1.4a10 10 0 0 1-3.2-3.2c-1.1-1.6-1.4-3.2-1-4.2.2-.5.9-.7 1.9-.7z" fill="white" stroke="none" />
      </svg>
    </a>
  );
}
