import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { images } from "@/data/images";
import { posts, postBySlug, type Post } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { CTABand, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, articleSchema, abs } from "@/lib/seo";

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
          children: JSON.stringify(articleSchema(p.title, p.metaDescription, path, p.date)),
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
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
            <p className="mt-4 text-xs text-muted-foreground">
              Published{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
