import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Award, Calendar, UserCheck } from "lucide-react";
import { images } from "@/data/images";
import { posts, postBySlug, type Post } from "@/data/blog";
import { business } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, articleSchema, abs } from "@/lib/seo";

const postServiceMap: Record<string, { name: string; slug: string; text: string }> = {
  "signs-you-need-drain-cleaning": {
    name: "Drain & Sewer Cleaning",
    slug: "drain-and-sewer-mesa-az",
    text: "Dealing with slow drains, gurgling pipes, or recurring backups in Mesa? Learn how our master plumbers clear blockages with inline cameras and hydro-jetters.",
  },
  "why-water-heaters-fail": {
    name: "Water Heater Repair & Installation",
    slug: "water-heaters-mesa-az",
    text: "Arizona hard water aggressively corrodes tanks and heating elements. View our same-day water heater replacement and repair services.",
  },
  "how-to-prevent-plumbing-emergencies": {
    name: "24/7 Emergency Plumbing Services",
    slug: "emergency-plumbing-mesa-az",
    text: "Facing an active water leak, ruptured supply line, or sewer overflow? Our emergency mobile workshops dispatch 24/7 across the East Valley.",
  },
  "benefits-of-hydro-jetting": {
    name: "Commercial & Residential Hydro Jetting",
    slug: "drain-and-sewer-mesa-az",
    text: "Snakes punch temporary holes, but 4,000 PSI hydro jetting scours away grease and tree roots. Check our hydro jetting service details.",
  },
  "common-plumbing-problems-in-mesa": {
    name: "Residential Plumbing in Mesa, AZ",
    slug: "residential-plumbing-mesa-az",
    text: "From slab leaks to hard water scaling and polybutylene repiping, explore full-service residential plumbing for Mesa homes.",
  },
  "residential-plumbing-maintenance-tips": {
    name: "Whole-Home Plumbing Maintenance",
    slug: "residential-plumbing-mesa-az",
    text: "Keep your water pressure balanced and avoid unexpected slab leaks with our licensed annual plumbing inspections.",
  },
  "gas-line-safety-guide": {
    name: "Gas Line Repair & Installation",
    slug: "gas-line-mesa-az",
    text: "Smell sulfur or planning an outdoor grill or fire pit? Our licensed gas fitters pull permits and pressure-test every line to code.",
  },
  "toilet-repair-guide": {
    name: "Bathroom Plumbing & Toilet Repair",
    slug: "bathroom-plumbing-mesa-az",
    text: "Fix phantom running toilets, broken closet flanges, and leaking seals with licensed Mesa bathroom plumbing pros.",
  },
  "water-heater-maintenance-checklist": {
    name: "Water Heater Flushing & Maintenance",
    slug: "water-heaters-mesa-az",
    text: "Flush mineral sediments and test sacrificial anode rods to double the lifespan of your Arizona water heater.",
  },
  "how-to-detect-hidden-leaks": {
    name: "Acoustic Slab Leak Detection",
    slug: "leak-detection-mesa-az",
    text: "Suspect an underground or slab leak? We locate leaks non-invasively using subterranean acoustic sensors before drilling your concrete.",
  },
};

export const Route = createFileRoute("/blog/$postSlug")({
  loader: ({ params }): { post: Post } => {
    const post = postBySlug(params.postSlug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const path = `/blog/${params.postSlug}`;
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: meta(p.metaTitle, p.metaDescription, path, "article"),
      links: [{ rel: "canonical", href: abs(path) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema(p.title, p.metaDescription, path, p.date, p.author, p.updatedDate)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: p.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block font-bold text-primary">
        Back to the blog
      </Link>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedService = postServiceMap[post.slug];

  return (
    <>
      <article>
        <section className="surface-panel py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <nav className="text-xs font-bold tracking-widest text-primary uppercase">
              <Link to="/blog">Blog</Link> · {post.category} · {post.readTime}
            </nav>
            <h1 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{post.title}</h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>

            {/* AUTHOR / REVIEWER BYLINE & VERIFIED TIMESTAMPS */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 border-t border-border/70 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  JL
                </span>
                <span>
                  Written by <strong className="font-semibold text-foreground">{post.author}</strong>
                </span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>
                Technically Reviewed by <strong className="font-semibold text-foreground">{post.technicalReviewer}</strong>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Verified: {post.updatedDate}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
          <img
            src={images[post.image]}
            alt={post.title}
            width={1280}
            height={853}
            className="rounded-2xl shadow-card"
          />
          <div className="mt-10 space-y-10">
            {post.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-2xl font-bold">{sec.heading}</h2>
                {sec.body.map((b) => (
                  <p key={b.slice(0, 40)} className="mt-4 leading-relaxed text-muted-foreground">
                    {b}
                  </p>
                ))}
                {sec.list && (
                  <ul className="mt-4 space-y-2">
                    {sec.list.map((l) => (
                      <li key={l} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* DOCUMENTED FIELD CASE STUDY / DIAGNOSTIC NOTE */}
          {post.documentedExample && (
            <div className="mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-card">
              <div className="border-b border-primary/20 bg-primary/5 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    Master Plumber's Documented Field Case
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {post.documentedExample.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="rounded-xl surface-panel p-4">
                    <strong className="text-foreground font-semibold">Diagnostic Scenario:</strong>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{post.documentedExample.scenario}</p>
                  </div>
                  <div className="rounded-xl surface-panel p-4">
                    <strong className="text-foreground font-semibold">Engineered Resolution:</strong>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{post.documentedExample.resolution}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs">
                  <strong className="text-primary font-bold">Arizona Code & Technical Takeaway:</strong>{" "}
                  <span className="text-muted-foreground leading-relaxed">{post.documentedExample.technicalTakeaway}</span>
                </div>
              </div>
            </div>
          )}

          {/* CONTEXTUAL SERVICE RECOMMENDATION CALLOUT */}
          {relatedService && (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
              <span className="text-xs font-bold tracking-wider text-primary uppercase">
                Related Mesa Plumbing Service
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                Need professional help with {relatedService.name}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {relatedService.text}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/$slug"
                  params={{ slug: relatedService.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full gradient-brand px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm"
                >
                  <span>Explore {relatedService.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {business.phoneDisplay} 24/7</span>
                </a>
              </div>
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-bold">The Takeaway</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{post.takeaway}</p>
          </div>
        </div>
      </article>

      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Keep Reading" title="More Plumbing Guides" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link
                  to="/blog/$postSlug"
                  params={{ postSlug: r.slug }}
                  className="block h-full rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
                >
                  <h3 className="font-display text-lg font-bold text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
