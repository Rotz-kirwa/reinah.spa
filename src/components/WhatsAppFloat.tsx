import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/254700000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppFloat;
