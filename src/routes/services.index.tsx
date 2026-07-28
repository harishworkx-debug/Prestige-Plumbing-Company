import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { allServices } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: meta(
      "Plumbing Services Mesa AZ | Residential & Commercial | Prestige Plumbing",
      "Full-service plumbing in Mesa & Phoenix: emergency plumbing, water heaters, drain cleaning, hydro jetting, leak detection, gas lines & repiping. Call (480) 215-0629.",
      "/services",
    ),
    links: [{ rel: "canonical", href: "/services" }],
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
            title="Every Plumbing Service Your Home Or Business Needs"
            text="Prestige Plumbing Company has served Mesa and the Phoenix metro since 2005 as a licensed, bonded and insured contractor. Whatever the fixture, pipe, drain or appliance, one company handles it — with flat-rate pricing quoted before work begins and a documented workmanship warranty afterward."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift"
                >
                  <img
                    src={images[s.image]}
                    alt={`${s.name} in Mesa AZ`}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold">{s.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                    <p className="mt-4 text-sm font-bold text-primary">View service →</p>
                  </div>
                </Link>
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
