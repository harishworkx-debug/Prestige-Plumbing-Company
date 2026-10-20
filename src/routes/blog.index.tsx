import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { images } from "@/data/images";
import { posts } from "@/data/blog";
import { business } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = `Plumbing Blog | Guides & Advice From Mesa AZ Plumbers | ${business.name}`;
const description = `Expert plumbing guides written by licensed Mesa, AZ plumbers at ${business.name}: water heaters, drain cleaning, slab leaks, and gas line safety.`;

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
            eyebrow="Plumbing Blog & Guides"
            center={false}
            title={`Field-Tested Arizona Plumbing Guides From Licensed Master Plumbers`}
            text={`Practical, honest advice from Jesse Leyva and our licensed technicians at ${business.name}. Grounded in decades of East Valley residential service calls.`}
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
