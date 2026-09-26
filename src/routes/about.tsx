import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/images";
import { business, whyChoose, process } from "@/data/site";
import { areas } from "@/data/areas";
import { Reveal } from "@/components/Reveal";
import { CTABand, CTAButtons, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = "About Prestige Plumbing Company | Family-Owned Contractor in Mesa, AZ";
const description =
  "Prestige Plumbing Company is a family-owned plumbing contractor dedicated to serving homeowners in Mesa, AZ and the East Valley. Call (480) 681-3808.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: meta(title, description, "/about"),
    links: [{ rel: "canonical", href: abs("/about") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/about")) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            center={false}
            title="A Trusted Family-Owned Plumbing Contractor"
            text={`${business.name} is a licensed, bonded, and insured plumbing contractor delivering expert service across Mesa and the Phoenix metro.`}
          />
          <div className="mt-8">
            <CTAButtons label="Schedule Service" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={images.aboutTeam}
              alt="Prestige Plumbing Company team in Mesa, Arizona"
              width={1280}
              height={853}
              loading="lazy"
              className="rounded-2xl shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold">Our Story</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We started with a simple promise: quote the price before the work, do the work right, and stand behind it. Today
                that promise still drives our business — we have just grown our team to include more local experts equipped with
                sewer cameras, acoustic leak detection gear and hydro jetting trailers.
              </p>
              <p>
                Arizona plumbing is its own discipline. Hard water shortens water heater life,
                caliche soil shifts and stresses buried lines, and post-tension slabs make a hidden
                leak an expensive guessing game for anyone without the right equipment. Our licensed
                technicians train specifically to handle the unique challenges of East Valley housing stock.
              </p>
              <p>
                Our goal is total accountability. We provide flat-rate pricing in writing and honest guidance about which repairs matter now. That is why
                most of our homeowners return to us for all their plumbing needs across Mesa, Gilbert, Chandler, Tempe, Scottsdale and Phoenix.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What Twenty Years Of Accountability Looks Like" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h3 className="font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="How Every Prestige Plumbing Job Runs" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <span className="font-display text-3xl font-bold text-primary/40">{p.step}</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Where We Work" title="Cities We Serve Across The East Valley" />
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

      <CTABand title="Call The Family-Owned Plumber That Answers" />
    </>
  );
}
