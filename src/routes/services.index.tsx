import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Phone, Wrench, ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { allServices, business } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, abs } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: meta(
      `Plumbing Services Mesa AZ | Licensed Contractor | ${business.name}`,
      `Full-service plumbing in Mesa & Phoenix: emergency plumbing, water heaters, drain cleaning, hydro jetting, leak detection, gas lines & repiping by ${business.name}. Call ${business.phoneDisplay}.`,
      "/services",
    ),
    links: [{ rel: "canonical", href: abs("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Plumbing Services"
            center={false}
            title="Complete Plumbing Solutions for Mesa & East Valley Homes"
            text={`${business.name} delivers master plumbing craftsmanship with full licensing, bonding, and insurance. Whatever the fixture, pipe, drain, or gas line, our licensed technicians provide upfront flat-rate pricing in writing and documented workmanship warranties.`}
          />

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Licensed, Bonded & Insured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Upfront Flat-Rate Written Pricing
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2">
              <Phone className="h-4 w-4 text-primary" /> 24/7 Live Emergency Dispatch
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift">
                  <div>
                    <Link to="/$slug" params={{ slug: s.slug }} className="block overflow-hidden">
                      <img
                        src={images[s.image]}
                        alt={`${s.name} in Mesa AZ by ${business.name}`}
                        width={1280}
                        height={853}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Residential & Commercial</span>
                        <span>Mesa, AZ</span>
                      </div>
                      <h2 className="mt-2 font-display text-xl font-bold">
                        <Link to="/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                          {s.name}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>

                      {/* SERVICE SCOPE PREVIEW */}
                      <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                        {s.benefits.slice(0, 2).map((b) => (
                          <li key={b} className="flex items-start gap-1.5">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* DEDICATED CALL & DETAILS CTA */}
                  <div className="flex items-center justify-between border-t border-border bg-muted/30 px-6 py-4">
                    <Link
                      to="/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      <span>Explore Scope & Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={business.phoneHref}
                      className="inline-flex items-center gap-1 rounded-full gradient-brand px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-sm"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold">Complete Plumbing Capability List</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If it carries water, waste or gas, we service it.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
              {allServices.map((s) => (
                <li key={s} className="rounded-lg bg-muted px-3 py-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand title="Not Sure Which Service You Need?" />
    </>
  );
}
