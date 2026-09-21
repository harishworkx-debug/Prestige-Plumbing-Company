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
import { business, homeFaqs, process, whyChoose } from "@/data/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, CTABand, SectionHeading, FAQList, MapEmbed } from "@/components/ui-kit";
import { faqSchema, meta, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Residential Plumbing Connections Mesa AZ | 24/7 Service",
      "Connect with trusted Mesa & Phoenix plumbing professionals. Emergency plumbing, water heaters, drain cleaning, leak detection & repiping. Call (480) 863-0564.",
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
              <ShieldCheck className="h-4 w-4 text-accent" /> 24/7 Connections
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Trusted Plumbing Connections Serving Mesa & Phoenix Metro
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Connecting Homeowners with Independent Professionals for Residential Plumbing Services. Emergency professionals available 24 hours a day, every day.
            </p>
            <div className="mt-9">
              <CTAButtons dark label="Call Now" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS REMOVED */}

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-1 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Residential Plumbing Connections
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Connecting The East Valley With Trusted Professionals
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Prestige Plumbing Company is a free connection service designed to help Arizona homeowners find reliable, independent plumbing professionals. We are based in Mesa and are the service thousands of families trust to connect them with local contractors when water is where it should not be.
              </p>
              <p>
                The independent professionals we connect you with handle every residential discipline — emergency plumbing, water heaters, drain and sewer work, leak detection, repiping, and gas lines.
              </p>
              <p>
                What genuinely separates the professionals in our network is their commitment to providing flat-rate pricing and honest guidance about which repairs matter now and which can wait.
              </p>
            </div>
            <div className="mt-8">
              <CTAButtons label="Find A Professional" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="surface-panel py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Use Prestige Plumbing"
            title="The Difference Between A Cold Search And A Trusted Connection"
            text="We help homeowners find the right independent professional for their specific residential plumbing needs."
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
            title="Residential & Emergency Plumbing Connections"
            text="From a running toilet to a whole-home repipe — connect with professionals who can handle every residential discipline."
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
              Call to get connected with a local professional who can provide guidance on shutting off water while a fully stocked truck is dispatched to your residential address.
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
      {/* TESTIMONIALS REMOVED */}

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
            eyebrow="Service Location"
            title="Connecting homeowners across Mesa and the Phoenix Metro"
          />
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTABand
        title="Get Fast Plumbing Help Today"
        text="Call or request a free estimate. Find professionals standing by 24 hours a day across Mesa and the Phoenix metro."
      />
    </>
  );
}
