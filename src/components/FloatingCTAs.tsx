import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/site";

export function FloatingCTAs() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed right-5 bottom-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={business.phoneHref}
          aria-label="Call Prestige Plumbing Company now"
          className="group flex items-center gap-3 rounded-full gradient-brand px-5 py-4 text-primary-foreground shadow-float transition-transform hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[12rem]">
            Call Now
          </span>
        </a>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Prestige Plumbing Company on WhatsApp"
          className="group flex items-center gap-3 rounded-full bg-[oklch(0.72_0.17_150)] px-5 py-4 text-white shadow-float transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[12rem]">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-secondary md:hidden">
        <a
          href={business.phoneHref}
          className="flex items-center justify-center gap-2 gradient-brand py-4 text-sm font-bold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[oklch(0.72_0.17_150)] py-4 text-sm font-bold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <div className="h-14 md:hidden" aria-hidden />
    </>
  );
}
