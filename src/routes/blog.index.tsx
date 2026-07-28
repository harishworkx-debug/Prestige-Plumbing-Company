import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/images";
import { posts } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = "Plumbing Blog | Tips & Guides From Mesa AZ Plumbers | Prestige Plumbing";
const description =
  "Expert plumbing advice from licensed Mesa, AZ plumbers: drain cleaning, water heaters, slab leaks, hard water and emergency prevention tips for Arizona homes.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: meta(title, description, "/blog"),
    links: [{ rel: "canonical", href: abs("/blog") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/blog")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Plumbing Blog"
            center={false}
            title="Arizona Plumbing Guides From Licensed Technicians"
            text="Practical, field-tested advice written by the same plumbers who work Mesa and Phoenix metro homes every day — no filler, no scare tactics."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/blog/$postSlug"
                  params={{ postSlug: p.slug }}
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
                    <h2 className="mt-2 font-display text-lg font-bold group-hover:underline">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Have A Plumbing Problem Right Now?" />
    </>
  );
}
