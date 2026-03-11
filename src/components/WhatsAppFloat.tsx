const whatsappUrl =
  "https://wa.me/254700000000?text=Hello%20Reinaha%27s%20Spa%2C%20I%27d%20like%20to%20book%20an%20appointment.";

const WhatsAppFloat = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <div className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md animate-pulse" />
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Reinaha's Spa on WhatsApp"
      className="relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_38px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.23c-.28-.14-1.64-.81-1.9-.91-.25-.09-.44-.14-.62.14-.18.28-.72.91-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.16-.43-2.21-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.49.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.86-2.05-.23-.54-.46-.46-.62-.46h-.53c-.18 0-.46.07-.69.32-.23.26-.9.88-.9 2.14 0 1.25.92 2.46 1.04 2.63.14.19 1.8 2.75 4.37 3.85.61.26 1.09.42 1.46.53.62.19 1.18.16 1.63.09.5-.07 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.18-.53-.32Z" />
          <path d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.49.72 4.9 2.08 6.97L3 29l6.22-2.24A12.74 12.74 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2Zm0 23.34c-2.08 0-4.11-.56-5.88-1.6l-.42-.25-3.69 1.33 1.35-3.6-.28-.44a10.47 10.47 0 0 1-1.62-5.58c0-5.77 4.71-10.48 10.5-10.48 2.79 0 5.41 1.09 7.38 3.06A10.38 10.38 0 0 1 26.5 16c0 5.79-4.71 10.5-10.5 10.5Z" />
        </svg>
      </span>
      <span className="hidden pr-1 text-left md:block">
        <span className="block text-[10px] font-body uppercase tracking-[0.3em] text-white/80">
          WhatsApp
        </span>
        <span className="block font-body text-sm font-medium leading-tight">
          Chat with us now
        </span>
      </span>
    </a>
  </div>
);

export default WhatsAppFloat;
