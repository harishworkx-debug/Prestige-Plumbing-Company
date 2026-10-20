import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle, Wrench, ShieldCheck, MapPin, DollarSign, Star, FileText, Award, ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { serviceBySlug, services, type Service } from "@/data/services";
import { areaBySlug, areas, type Area } from "@/data/areas";
import { business } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, CTABand, FAQList, MapEmbed } from "@/components/ui-kit";
import { meta, faqSchema, serviceSchema, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

type Resolved =
  | { kind: "service"; service: Service }
  | { kind: "area"; area: Area };

export const Route = createFileRoute("/$slug")({
  loader: ({ params }): Resolved => {
    const service = serviceBySlug(params.slug);
    if (service) return { kind: "service", service };
    const area = areaBySlug(params.slug);
    if (area) return { kind: "area", area };
    throw notFound();
  },
  head: ({ params, loaderData }) => {
    const path = `/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Page unavailable" }, { name: "robots", content: "noindex" }] };
    }
    if (loaderData.kind === "service") {
      const s = loaderData.service;
      return {
        meta: meta(s.metaTitle, s.metaDescription, path, "article"),
        links: [{ rel: "canonical", href: abs(path) }],
        scripts: [
          { type: "application/ld+json", children: JSON.stringify(serviceSchema(s.name, s.metaDescription, path)) },
          { type: "application/ld+json", children: JSON.stringify(webPageSchema(s.metaTitle, s.metaDescription, path)) },
          { type: "application/ld+json", children: JSON.stringify(faqSchema(s.faqs)) },
          {
            type: "application/ld+json",
            children: JSON.stringify(
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: s.name, path },
              ]),
            ),
          },
        ],
      };
    }
    const a = loaderData.area;
    return {
      meta: meta(a.metaTitle, a.metaDescription, path),
      links: [{ rel: "canonical", href: abs(path) }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceSchema("Plumbing Services", a.metaDescription, path, a.city)) },
        { type: "application/ld+json", children: JSON.stringify(webPageSchema(a.metaTitle, a.metaDescription, path)) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(a.faqs)) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Locations", path: "/service-areas" },
              { name: `Plumber in ${a.city}, AZ`, path },
            ]),
          ),
        },
      ],
    };
  },
  component: FlatPage,
});

function FlatPage() {
  const data = Route.useLoaderData();
  return data.kind === "service" ? <ServicePage s={data.service} /> : <AreaPage a={data.area} />;
}

function ServicePage({ s }: { s: Service }) {
  const internalLinks =
    s.relatedLinks && s.relatedLinks.length > 0
      ? s.relatedLinks
      : s.related.map((slug) => {
          const target = serviceBySlug(slug);
          return {
            slug,
            anchor: target?.name ?? slug,
            description: target?.tagline,
          };
        });

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={images[s.image]}
          alt={`${s.name} services by ${business.name} in Mesa, Arizona`}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-secondary-foreground lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-secondary-foreground/75 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-secondary-foreground/40">&gt;</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-secondary-foreground/40">&gt;</span>
            <span className="text-white font-bold">{s.name}</span>
          </nav>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Licensed & Insured
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              24/7 Mesa Dispatch
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Upfront Flat Rates
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            {s.h1 || `${s.name} in Mesa, AZ`}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/80">{s.tagline}</p>
          <div className="mt-8">
            <CTAButtons dark label="Talk To A Plumber" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                {s.intro.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                Why Mesa Homeowners Choose Us For {s.name}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-card">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                When You Need A Professional: Problems We Solve
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <AlertTriangle className="h-5 w-5 text-accent" /> Common Plumbing Failures
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.problems.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="font-bold text-accent">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl surface-panel p-6">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Urgent Warning Signs
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.signs.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="font-bold text-primary">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {s.diagnosticOptions && s.diagnosticOptions.length > 0 && (
              <Reveal>
                <h2 className="mt-14 font-display text-3xl font-bold">
                  {s.diagnosticHeading || "Diagnosis & Repair vs. Replacement Options"}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  We diagnose first with professional diagnostic tools so you understand exactly what failed and have clear choices before any work starts.
                </p>
                <div className="mt-6 grid gap-4">
                  {s.diagnosticOptions.map((opt) => (
                    <div key={opt.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="font-display text-lg font-bold text-foreground">{opt.title}</h3>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {opt.recommendation}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{opt.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">{s.stepsHeading || "Our Step-by-Step Work Process"}</h2>
              <ol className="mt-6 space-y-4">
                {s.steps.map((st, i) => (
                  <li key={st.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold">{st.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{st.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {s.pricingPolicy && (
              <Reveal>
                <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <div className="gradient-brand p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-6 w-6" />
                      <h2 className="font-display text-2xl font-bold">Upfront Pricing & Estimate Policy</h2>
                    </div>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      Transparent, honest pricing in writing before any physical work starts.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-xl surface-panel p-4">
                        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Estimate Type</span>
                        <p className="mt-1 text-sm font-semibold text-foreground">{s.pricingPolicy.estimateType}</p>
                      </div>
                      <div className="rounded-xl surface-panel p-4">
                        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Pricing Model</span>
                        <p className="mt-1 text-sm font-semibold text-foreground">{s.pricingPolicy.pricingModel}</p>
                      </div>
                      <div className="rounded-xl surface-panel p-4">
                        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Warranty Backing</span>
                        <p className="mt-1 text-sm font-semibold text-foreground">{s.pricingPolicy.warranty}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.pricingPolicy.details}</p>
                  </div>
                </div>
              </Reveal>
            )}

            {s.caseStudy && (
              <Reveal>
                <div className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-xs font-bold tracking-wider text-primary uppercase">
                        Verified Arizona Job Spotlight
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{s.caseStudy.location}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold">{s.caseStudy.title}</h3>
                  <div className="mt-2 text-xs font-semibold text-muted-foreground">
                    Lead Technician: <span className="text-foreground">{s.caseStudy.technician}</span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl surface-panel p-4 text-sm">
                      <strong className="text-foreground">The Challenge:</strong>
                      <p className="mt-1 text-muted-foreground">{s.caseStudy.challenge}</p>
                    </div>
                    <div className="rounded-xl surface-panel p-4 text-sm">
                      <strong className="text-foreground">Our Solution:</strong>
                      <p className="mt-1 text-muted-foreground">{s.caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
                    <strong className="text-primary font-bold">Outcome:</strong>{" "}
                    <span className="text-muted-foreground">{s.caseStudy.outcome}</span>
                  </div>

                  <blockquote className="mt-5 border-l-4 border-accent pl-4 text-sm italic text-foreground">
                    "{s.caseStudy.testimonialSnippet}"
                    <footer className="mt-1 font-semibold not-italic text-xs text-muted-foreground">
                      — {s.caseStudy.customerName}
                    </footer>
                  </blockquote>
                </div>
              </Reveal>
            )}

            {s.detail.map((d) => (
              <Reveal key={d.heading}>
                <h2 className="mt-14 font-display text-3xl font-bold">{d.heading}</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {d.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">{s.maintenanceHeading || "Mesa Homeowner Maintenance Tips"}</h2>
              <ul className="mt-6 space-y-2">
                {s.maintenance.map((m) => (
                  <li key={m} className="flex gap-3 text-muted-foreground">
                    <Wrench className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                {s.name} Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <FAQList faqs={s.faqs} />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">Related Plumbing Services</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore related diagnostic, repair and maintenance services for Mesa and East Valley homeowners:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {internalLinks.map((link) => (
                  <Link
                    key={link.slug}
                    to="/$slug"
                    params={{ slug: link.slug }}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-card hover-lift transition-all hover:border-primary/40"
                  >
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.anchor}
                      </h3>
                      {link.description && (
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <span className="mt-4 inline-flex items-center text-xs font-semibold text-primary group-hover:underline">
                      Explore service &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                We Service {s.name} Across All Valley Cities
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Our mobile plumbing workshops are centrally dispatched from our shop in Mesa, providing rapid coverage to all neighboring communities:
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    to="/$slug"
                    params={{ slug: a.slug }}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    {a.city}, AZ
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-float">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase">
                <ShieldCheck className="h-4 w-4" /> Free Estimate
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold">Book {s.name} Today</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Licensed, bonded, and insured plumbing contractors. Flat-rate pricing in writing before work begins, 24/7 emergency dispatch across Mesa and the Valley.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <CTAButtons label="Call Now" />
              </div>
              <Link
                to="/contact"
                className="mt-4 block rounded-full border border-border py-3 text-center text-sm font-bold hover:bg-muted"
              >
                Request Free Estimate
              </Link>
            </div>
            <div className="mt-6 rounded-2xl surface-panel p-6">
              <h4 className="font-display text-lg font-bold">All Services</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {services.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/$slug"
                      params={{ slug: o.slug }}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {o.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABand
        title={s.ctaTitle || `Ready For Expert ${s.name}?`}
        text={s.ctaText}
        buttonLabel={s.ctaButtonLabel}
      />
    </>
  );
}

function AreaPage({ a }: { a: Area }) {
  const nearby = areas.filter((o) => o.slug !== a.slug).slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={images.areaHero}
          alt={`Licensed plumbing service in ${a.city}, Arizona by ${business.name}`}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-secondary-foreground lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-secondary-foreground/70">
            <Link to="/">Home</Link> / <Link to="/service-areas">Locations</Link> / {a.city}, AZ
          </nav>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Licensed & Insured
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Dispatched From Mesa Hub
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
              Upfront Flat Rates
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Licensed Plumber in {a.city}, AZ
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/80">{a.headline}</p>
          <div className="mt-8">
            <CTAButtons dark label="Call Your Local Plumber" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_320px] lg:px-8">
          <div>
            <Reveal>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display text-xs font-bold text-primary uppercase tracking-wider">
                      Verified Service Area & Dispatch Transparency
                    </h3>
                    <p className="mt-1 text-sm text-foreground leading-relaxed font-medium">
                      {a.dispatchNote}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                {a.intro.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Reveal>

            {a.projectSpotlight && (
              <Reveal>
                <div className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-xs font-bold tracking-wider text-primary uppercase">
                        Verified {a.city} Project Spotlight
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{a.projectSpotlight.neighborhood}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold">{a.projectSpotlight.title}</h3>
                  <div className="mt-2 text-xs font-semibold text-muted-foreground">
                    Lead Technician: <span className="text-foreground">{a.projectSpotlight.technician}</span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl surface-panel p-4 text-sm">
                      <strong className="text-foreground">The Challenge:</strong>
                      <p className="mt-1 text-muted-foreground">{a.projectSpotlight.challenge}</p>
                    </div>
                    <div className="rounded-xl surface-panel p-4 text-sm">
                      <strong className="text-foreground">Our Solution:</strong>
                      <p className="mt-1 text-muted-foreground">{a.projectSpotlight.solution}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
                    <strong className="text-primary font-bold">Outcome:</strong>{" "}
                    <span className="text-muted-foreground">{a.projectSpotlight.outcome}</span>
                  </div>

                  <blockquote className="mt-5 border-l-4 border-accent pl-4 text-sm italic text-foreground">
                    "{a.projectSpotlight.testimonialSnippet}"
                    <footer className="mt-1 font-semibold not-italic text-xs text-muted-foreground">
                      — {a.projectSpotlight.customerName}
                    </footer>
                  </blockquote>
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                Typical Plumbing Issues In {a.city}
              </h2>
              <div className="mt-6 space-y-4">
                {a.localIssues.map((i) => (
                  <div key={i.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-display text-lg font-bold">{i.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                Plumbing Services We Provide In {a.city}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-xl border border-border bg-card p-4 text-sm font-semibold shadow-card hover-lift"
                  >
                    {s.name} in {a.city}, AZ
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                24/7 Emergency Plumbing in {a.city}
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Plumbing emergencies don't wait for business hours, and neither do we. Whether you're dealing with a burst pipe, a sewage backup, or a failed water heater in {a.city}, our master plumbers are on-call 24 hours a day, 365 days a year. Dispatched directly from our central shop in Mesa, our fully stocked trucks arrive quickly to isolate the hazard, stop water damage, and complete code-compliant repairs with upfront flat-rate pricing.
              </p>
            </Reveal>

            {a.reviews && a.reviews.length > 0 && (
              <Reveal>
                <h2 className="mt-14 font-display text-3xl font-bold">
                  Reviews from {a.city} Homeowners
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {a.reviews.map((r, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                      <div className="flex gap-1 text-amber-500 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm italic text-muted-foreground">"{r.text}"</p>
                      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                        <span className="font-semibold text-sm">{r.name}</span>
                        <span className="text-xs text-muted-foreground">{r.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                Neighborhoods And Landmarks We Serve in {a.city}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg font-bold">Neighborhoods</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {a.neighborhoods.map((n) => (
                      <li key={n} className="flex gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Local Landmarks</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {a.landmarks.map((l) => (
                      <li key={l} className="flex gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">ZIP codes served: {a.zips}</p>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                Why Choose Us For {a.city} Plumbing
              </h2>
              <ul className="mt-6 space-y-2">
                {a.whyLocal.map((w) => (
                  <li key={w} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">
                {a.city} Plumbing Questions Answered
              </h2>
              <div className="mt-6">
                <FAQList faqs={a.faqs} />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">Nearby Valley Cities We Serve</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {nearby.map((o) => (
                  <Link
                    key={o.slug}
                    to="/$slug"
                    params={{ slug: o.slug }}
                    className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary"
                  >
                    Plumber in {o.city}, AZ
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-14">
                <MapEmbed />
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-float">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase">
                <ShieldCheck className="h-4 w-4" /> 24/7 Dispatch
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold">
                Need A Plumber In {a.city}?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Licensed, bonded, and insured master plumbers dispatched across {a.city} and the East Valley, 24 hours a day.
              </p>
              <div className="mt-6">
                <CTAButtons label="Call Now" />
              </div>
              <Link
                to="/contact"
                className="mt-4 block rounded-full border border-border py-3 text-center text-sm font-bold hover:bg-muted"
              >
                Request Free Estimate
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTABand title={`Trusted Plumbers Serving ${a.city}, Arizona`} />
    </>
  );
}
