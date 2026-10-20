import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { areas } from "@/data/areas";
import { business } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = `Plumbing Service Areas | ${business.name} Mesa & East Valley`;
const description = `${business.name} serves Mesa, Gilbert, Chandler, Tempe, Scottsdale, Phoenix, Queen Creek & the East Valley with 24/7 licensed plumbing. Call ${business.phoneDisplay}.`;

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
            eyebrow="Service Coverage"
            center={false}
            title={`Licensed Plumbers Serving Mesa & The Phoenix East Valley`}
            text={`Our central operations hub is located at 1120 E Jarvis Ave in Mesa, AZ. Our fully equipped mobile plumbing units provide direct residential and commercial service across the East Valley and metropolitan Phoenix.`}
          />

          {/* COVERAGE EXPLANATION CARDS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <MapPin className="h-4 w-4" /> Primary Hub
              </div>
              <div className="mt-2 font-display text-base font-bold">Mesa Dispatch Center</div>
              <p className="mt-1 text-xs text-muted-foreground">
                1120 E Jarvis Ave, Mesa, AZ 85204. Fast response across all Mesa ZIP codes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <Clock className="h-4 w-4" /> Rapid Response Core
              </div>
              <div className="mt-2 font-display text-base font-bold">East Valley Cities</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Mesa, Gilbert, Chandler, Tempe, Scottsdale, Queen Creek & San Tan Valley.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <ShieldCheck className="h-4 w-4" /> Licensed Valleywide
              </div>
              <div className="mt-2 font-display text-base font-bold">Metro Phoenix Area</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Scheduled and emergency services for Phoenix, Glendale, and Ahwatukee.
              </p>
            </div>
          </div>
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
