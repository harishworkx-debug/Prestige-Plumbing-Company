import { createFileRoute, Link } from "@tanstack/react-router";
import { areas } from "@/data/areas";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = "Plumbing Service Areas in Mesa & the East Valley | Prestige Plumbing Company";
const description =
  "Prestige Plumbing Company serves Mesa, Gilbert, Chandler, Tempe, Scottsdale, Phoenix, Queen Creek and the wider East Valley with 24/7 licensed plumbing. Call (480) 681-3808.";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: meta(title, description, "/service-areas"),
    links: [{ rel: "canonical", href: abs("/service-areas") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/service-areas")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/service-areas" },
          ]),
        ),
      },
    ],
  }),
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Service Areas"
            center={false}
            title="Licensed Plumbers Serving Mesa And The East Valley"
            text="Our shop sits at 1120 E Jarvis Ave in Mesa, and our trucks cover the surrounding valley every day. Choose your city below for local plumbing information, common issues in your area and 24/7 dispatch."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/$slug"
                  params={{ slug: a.slug }}
                  className="block h-full rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
                >
                  <h2 className="font-display text-xl font-bold">Plumber in {a.city}, AZ</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{a.headline}</p>
                  <p className="mt-4 text-sm font-bold text-primary">View {a.city} page →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Not Sure If We Cover Your Street?" />
    </>
  );
}
