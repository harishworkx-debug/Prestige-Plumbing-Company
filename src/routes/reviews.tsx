import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { areas } from "@/data/areas";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = "Network Standards | Prestige Plumbing Company Mesa, AZ";
const description =
  "Learn about the rigorous standards for the independent plumbing professionals in the Prestige Plumbing Company network across Mesa, Gilbert, Chandler and Tempe.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: meta(title, description, "/reviews"),
    links: [{ rel: "canonical", href: abs("/reviews") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/reviews")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Network Standards", path: "/reviews" },
          ]),
        ),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Network"
            center={false}
            title="Rigorous Standards For Local Professionals"
            text="We believe homeowners deserve transparency. Here is what you can expect from the independent plumbing professionals we connect you with across Mesa, Gilbert, Chandler, Tempe, Scottsdale and Queen Creek."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Licensed Professionals",
                text: "The contractors in our network are required to hold the proper residential plumbing licenses.",
              },
              {
                title: "Upfront Pricing",
                text: "Professionals will provide flat-rate pricing and honest guidance before any work begins.",
              },
              {
                title: "Fully Equipped",
                text: "Network professionals carry the tools needed for modern diagnosis, including acoustic leak detection.",
              },
            ].map((t, i) => (
              <figure key={i} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
                <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Local Connections" title="Find A Professional By City" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to="/$slug"
                params={{ slug: a.slug }}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold hover:bg-muted"
              >
                Find Plumbers in {a.city}, AZ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready To Connect With A Local Professional?" />
    </>
  );
}
