import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle, Wrench, ShieldCheck } from "lucide-react";
import { images } from "@/data/images";
import { serviceBySlug, services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, CTABand, FAQList } from "@/components/ui-kit";
import { meta, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const path = `/services/${params.slug}`;
    return {
      meta: meta(s.metaTitle, s.metaDescription, path, "article"),
      links: [{ rel: "canonical", href: path }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceSchema(s.name, s.metaDescription, path)) },
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
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const related = s.related.map(serviceBySlug).filter(Boolean);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={images[s.image]}
          alt={`${s.name} services by Prestige Plumbing Company in Mesa, Arizona`}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-secondary-foreground lg:px-8 lg:py-28">
          <nav className="text-xs font-semibold text-secondary-foreground/70">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {s.name}
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">{s.name}</h1>
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
                Benefits Of Professional {s.name}
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
              <h2 className="mt-14 font-display text-3xl font-bold">Common Problems We Solve</h2>
              <ul className="mt-6 space-y-2">
                {s.problems.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">Signs You Need This Service</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.signs.map((p) => (
                  <li key={p} className="rounded-xl surface-panel p-4 text-sm">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">Our Process</h2>
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

            <Reveal>
              <h2 className="mt-14 font-display text-3xl font-bold">Maintenance Tips</h2>
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
                Why Choose Prestige Plumbing Company
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We have been a family owned, licensed, bonded and insured plumbing contractor in
                Mesa since 2005. Every {s.name.toLowerCase()} job is quoted flat-rate in writing
                before we begin, performed to Arizona plumbing code, documented with photographs, and
                backed by a workmanship warranty. Our technicians are background checked, arrive in
                marked vehicles, protect your flooring, and leave the site clean. We serve{" "}
                <Link to="/service-areas" className="font-semibold text-primary hover:underline">
                  Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale and the wider Valley
                </Link>{" "}
                24 hours a day.
              </p>
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
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r!.slug}
                    to="/services/$slug"
                    params={{ slug: r!.slug }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card hover-lift"
                  >
                    <h3 className="font-display text-lg font-bold">{r!.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r!.tagline}</p>
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
                Licensed, bonded and insured. Flat-rate pricing before work begins, 24/7 emergency
                dispatch across the Valley.
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
                      to="/services/$slug"
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

      <CTABand title={`Ready For Expert ${s.name}?`} />
    </>
  );
}
