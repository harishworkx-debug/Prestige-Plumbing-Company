import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { images } from "@/data/images";
import { business, homeFaqs, process, whyChoose, testimonials, stats } from "@/data/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, CTABand, SectionHeading, FAQList } from "@/components/ui-kit";
import { abs, faqSchema, meta, breadcrumbSchema, reviewsSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      `Plumber in Mesa, AZ | 24/7 Emergency Plumbing | Prestige Plumbing`,
      `Need a licensed plumber in Mesa, AZ? Prestige Plumbing Company (AZ ROC #347689) provides 24/7 emergency repairs, water heaters, drain cleaning & slab leaks. Call (480) 681-3808.`,
      "/",
    ),
    links: [{ rel: "canonical", href: abs("/") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) },
      { type: "application/ld+json", children: JSON.stringify(reviewsSchema(testimonials)) },
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
          alt={`Licensed plumbing technician from ${business.name} repairing copper pipes under a sink in Mesa, Arizona`}
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
              <ShieldCheck className="h-4 w-4 text-accent" /> AZ {business.rocLicense} · Licensed & Insured
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Mesa's Trusted Family-Owned Plumbing Contractor
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Expert residential and commercial plumbing by master technicians based at 1120 E Jarvis Ave in Mesa. Flat-rate written pricing, 24/7 emergency dispatch, and guaranteed craftsmanship across the East Valley.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTAButtons dark label="Call (480) 681-3808" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                View Services & Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VERIFIED PROOF & STATS BAR */}
      <section className="border-y border-border bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO: MESA CONTRACTOR POSITIONING */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-1 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Mesa Plumbing Contractor
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Family-Owned Plumbing Excellence Grounded In Mesa, Arizona
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {business.name} is a family-owned plumbing contractor dedicated to protecting Arizona homes and commercial properties. Based at 1120 E Jarvis Ave in Mesa, our team is who local families rely on when water is where it shouldn’t be.
              </p>
              <p>
                Arizona plumbing presents unique local challenges: heavy municipal water hardness that destroys water heater tanks, aggressive caliche soils that stress underground sewer lines, and concrete slab foundations that require precision acoustic detection rather than destructive digging.
              </p>
              <p>
                Every service truck we dispatch is equipped as a complete mobile workshop with color sewer inspection cameras, 4,000 PSI hydro-jetters, and calibrated diagnostic tools. We provide upfront, flat-rate pricing in writing before any work begins.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButtons label="Schedule Service" />
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted"
              >
                Learn About Our Team & License
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Prestige Plumbing"
            title="The Difference Between A Corporate Chain And A Family-Owned Contractor"
            text="We provide expert plumbing solutions tailored to your home, backed by our commitment to excellent service."
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
            title="Residential & Emergency Plumbing Services"
            text="From a running toilet to a whole-home repipe — our expert plumbers handle every residential discipline."
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
              Call our dispatch team for immediate guidance on shutting off water while a fully stocked truck is dispatched to your residential address.
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
      {/* REVIEWS (Kept in DOM/Backend for SEO & Schema, visually hidden from UI) */}
      <div className="sr-only" aria-hidden="true">
        <h2>Customer Reviews & Testimonials</h2>
        {testimonials.map((t, i) => (
          <article key={i}>
            <p>Rating: 5/5 stars</p>
            <blockquote>{t.text}</blockquote>
            <cite>— {t.name}, {t.time}</cite>
          </article>
        ))}
      </div>

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
                  to="/blog/$postSlug"
                  params={{ postSlug: p.slug }}
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



      <CTABand
        title="Get Fast Plumbing Help Today"
        text="Call or request a free estimate. Our licensed plumbers are standing by 24 hours a day across Mesa and the Phoenix metro."
      />
    </>
  );
}
