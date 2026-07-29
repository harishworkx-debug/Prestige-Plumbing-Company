import { Phone } from "lucide-react";
import { business } from "@/data/site";

export function CTAButtons({ label = "Call Now", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={business.phoneHref}
        className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-4 text-sm font-bold text-primary-foreground shadow-float transition-transform hover:scale-105"
      >
        <Phone className="h-4 w-4" /> {label} · {business.phoneDisplay}
      </a>
    </div>
  );
}

export function CTABand({
  title = "Need A Plumber Right Now?",
  text = "Licensed, bonded and insured plumbers answering 24 hours a day across Mesa and the Phoenix metro. Free estimates on replacement work.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground">
      <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/70">{text}</p>
        <div className="mt-8 flex justify-center">
          <CTAButtons dark label="Talk To A Plumber" />
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function FAQList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      {faqs.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:hidden">
            <span className="flex items-start justify-between gap-4">
              {f.q}
              <span className="mt-1 text-primary transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function MapEmbed() {
  return (
    <iframe
      title="Prestige Plumbing Company location in Mesa, Arizona"
      src={business.mapEmbed}
      width="100%"
      height={500}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      className="rounded-2xl shadow-card"
    />
  );
}
