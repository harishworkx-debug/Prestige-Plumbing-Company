import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { areas } from "@/data/areas";
import { testimonials, business } from "@/data/site";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, reviewsSchema, abs } from "@/lib/seo";

const title = `Verified Customer Reviews | ${business.name} Mesa, AZ`;
const description = `Read authentic customer reviews for ${business.name} in Mesa, AZ (AZ ${business.rocLicense}). 4.7★ Google rating for gas lines, water heaters, and 24/7 plumbing repairs.`;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: meta(title, description, "/reviews"),
    links: [{ rel: "canonical", href: abs("/reviews") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/reviews")) },
      { type: "application/ld+json", children: JSON.stringify(reviewsSchema(testimonials)) },
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
            eyebrow="Customer Feedback"
            center={false}
            title={`Real Reviews for ${business.name}`}
            text={`Verified experiences from homeowners and local businesses across Mesa, Gilbert, Chandler, Tempe, Scottsdale, and the East Valley.`}
          />

          {/* VERIFIED RATING SUMMARY BANNER */}
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-extrabold text-foreground">4.7</span>
              <div>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-muted-foreground">
                  Verified Google Customer Rating
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-border hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>25+ Public Google Reviews</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Licensed AZ {business.rocLicense}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    {t.service && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        {t.service}
                      </span>
                    )}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                    "{t.text}"
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 grid place-items-center font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.time}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground">Verified</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Our Service Areas" />
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

      <CTABand title="Ready For Expert Plumbing Service?" />
    </>
  );
}
