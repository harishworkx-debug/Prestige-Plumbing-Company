import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Clock,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { images } from "@/data/images";
import { business, stats, trustBadges, testimonials, homeFaqs, process, whyChoose } from "@/data/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, CTABand, SectionHeading, FAQList, MapEmbed } from "@/components/ui-kit";
import { faqSchema, meta, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Plumber Mesa AZ | Prestige Plumbing Company | 24/7 Licensed Plumbers",
      "Trusted Mesa & Phoenix plumbing company. Emergency plumbing, water heaters, drain cleaning, leak detection & repiping. Licensed and insured. Call (480) 215-0629.",
      "/",
    ),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }])),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Licensed Prestige Plumbing technician repairing copper pipes under a kitchen sink in Mesa, Arizona"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-secondary-foreground"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-accent" /> Licensed · Insured
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Trusted Plumbing Experts Serving Mesa & Phoenix Metro
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Licensed & Insured Plumbing Company Providing Residential & Commercial
              Plumbing Services. Emergency plumbers answering 24 hours a day, every day.
            </p>
            <div className="mt-9">
              <CTAButtons dark label="Call Now" />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card hover-lift">
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-1 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Family Owned Plumbing Company
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Plumbing The East Valley, One Neighbor At A Time
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Prestige Plumbing Company opened its doors in Mesa with a single truck and a
                straightforward promise: answer the phone, tell the truth, and do the work properly
                the first time. Today we are still family owned and operated, still
                based at 1120 E Jarvis Ave, and still the company thousands of Arizona families call
                when water is where it should not be.
              </p>
              <p>
                We are a fully licensed and insured Arizona plumbing contractor handling
                every discipline in the trade — emergency plumbing, water heaters, drain and sewer
                work, leak detection, repiping, gas lines, and complete residential and commercial
                installation. Our technicians are background checked, uniformed, and trained to
                diagnose with cameras, pressure gauges and acoustic equipment rather than guesswork.
              </p>
              <p>
                What genuinely separates us is the conversation before the wrench. You receive
                flat-rate pricing in writing, a plain-English explanation of what failed and why,
                and honest guidance about which repairs matter now and which can wait. That is why
                most of our work comes from repeat customers and their referrals across Mesa,
                Gilbert, Chandler, Tempe, Scottsdale and Phoenix.
              </p>
            </div>
            <div className="mt-8">
              <CTAButtons label="Free Plumbing Estimate" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Prestige Plumbing"
            title="The Difference Between A Plumber And A Plumbing Company You Keep"
            text="Every promise below is one we have kept for twenty years across tens of thousands of Arizona service calls."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-primary-foreground">
                    <Wrench className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Plumbing Services"
            title="Residential, Commercial & Emergency Plumbing Under One Roof"
            text="From a running toilet to a whole-home repipe, a restaurant grease line to a backyard fire pit gas run — every discipline handled by licensed technicians."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <Link
                  to="/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
                >
                  <img
                    src={images[s.image]}
                    alt={`${s.name} services in Mesa, Arizona`}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-primary group-hover:underline">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="relative overflow-hidden bg-secondary py-14 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
              <Clock className="h-4 w-4" /> 24 Hour Emergency Plumbing
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Burst Pipe? Sewage Backup? No Hot Water? We Answer At Any Hour.
            </h2>
            <p className="mt-3 max-w-2xl text-secondary-foreground/70">
              A live plumbing professional answers your call 365 days a year and guides you through
              shutting off water while a fully stocked truck is dispatched to your address.
            </p>
          </div>
          <CTAButtons dark label="Emergency Plumbing" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="How Our Plumbing Process Works"
            title="Six Steps From Your Call To A Warrantied Repair"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                  <span className="font-display text-4xl font-bold text-gradient">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Arizona Homeowners Say About Prestige Plumbing"
            text="A 4.9 star average across 487+ Google and verified customer reviews from Mesa to Scottsdale."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.07}>
                <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, n) => (
                      <Star key={n} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 font-display font-bold">
                    {t.name}
                    <span className="block text-xs font-medium text-muted-foreground">{t.city}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/reviews" className="font-bold text-primary hover:underline">
              Read all customer reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Areas We Serve"
            title="Plumbing Service Across Mesa & The Phoenix Metro"
            text="Based in Mesa, dispatching daily across the East Valley and greater Phoenix."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 5) * 0.05}>
                <Link
                  to="/$slug"
                  params={{ slug: a.slug }}
                  className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold shadow-card transition-colors hover:border-primary hover:text-primary"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  {a.city}, AZ
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Latest Plumbing Tips" title="Advice From Our Master Plumbers" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
                >
                  <img
                    src={images[p.image]}
                    alt={p.title}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      {p.category} · {p.readTime}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Plumbing Questions Arizona Homeowners Ask Us" />
          <div className="mt-12">
            <FAQList faqs={homeFaqs} />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Visit Our Mesa Shop"
            title={`${business.street}, ${business.city}, ${business.state} ${business.zip}`}
          />
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTABand
        title="Get Fast Plumbing Help Today"
        text="Call or request a free estimate. Licensed and insured plumbers standing by 24 hours a day across Mesa and the Phoenix metro."
      />
    </>
  );
}
