import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials, stats } from "@/data/site";
import { areas } from "@/data/areas";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, reviewSchema, abs } from "@/lib/seo";

const title = "Reviews | Prestige Plumbing Company Mesa, AZ | 4.9 Star Rated Plumbers";
const description =
  "Read verified customer reviews for Prestige Plumbing Company in Mesa, AZ. 4.9 stars across 487 reviews from Mesa, Gilbert, Chandler, Tempe and Scottsdale homeowners.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: meta(title, description, "/reviews"),
    links: [{ rel: "canonical", href: abs("/reviews") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/reviews")) },
      { type: "application/ld+json", children: JSON.stringify(reviewSchema()) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
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
            eyebrow="Customer Reviews"
            center={false}
            title="Rated 4.9 Stars By Mesa And East Valley Homeowners"
            text="Twenty years of plumbing in one valley means our reputation travels faster than our trucks. Here is what customers across Mesa, Gilbert, Chandler, Tempe, Scottsdale and Queen Creek say about the work."
          />
          <div className="mt-6 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="text-sm font-bold">4.9 / 5 · 487 reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-bold">
                    {t.name}
                    <span className="block text-xs font-medium text-muted-foreground">{t.city}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
              >
                <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Local Reviews" title="See Reviews By City" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to="/$slug"
                params={{ slug: a.slug }}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold hover:bg-muted"
              >
                Plumber in {a.city}, AZ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready To Join Our Happy Customers?" />
    </>
  );
}
