import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/images";
import { business, stats, whyChoose, process, trustBadges } from "@/data/site";
import { areas } from "@/data/areas";
import { Reveal } from "@/components/Reveal";
import { CTABand, CTAButtons, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = "About Prestige Plumbing Company | Licensed Plumbers in Mesa, AZ";
const description =
  "Family owned since 2005, Prestige Plumbing Company is a licensed, bonded and insured plumbing contractor in Mesa, AZ serving the entire East Valley. Call (480) 215-0629.";

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
            title="A Family Owned Mesa Plumbing Company Since 2005"
            text={`${business.name} has served Mesa and the Phoenix metro for two decades from our shop at ${business.street}, ${business.city}, ${business.state}. Licensed, bonded and insured — with the same family name on the truck, the invoice and the warranty.`}
          />
          <div className="mt-8">
            <CTAButtons label="Talk To A Plumber" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={images.van}
              alt="Prestige Plumbing Company service van in Mesa, Arizona"
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
                We started in 2005 with one truck, one licensed plumber and a simple promise: quote
                the price before the work, do the work right, and stand behind it. Twenty years
                later that promise still runs the business — we have just added more trucks,
                sewer cameras, acoustic leak detection gear and hydro jetting trailers.
              </p>
              <p>
                Arizona plumbing is its own discipline. Hard water shortens water heater life,
                caliche soil shifts and stresses buried lines, and post-tension slabs make a hidden
                leak an expensive guessing game for anyone without the right equipment. Our
                technicians train specifically for East Valley housing stock, from 1970s Mesa ranch
                homes on galvanized pipe to new Queen Creek builds still under warranty.
              </p>
              <p>
                Being family owned changes the incentives. There is no commission structure pushing
                a technician toward a replacement you do not need, and no call center booking work
                for a crew they will never meet. The person who answers your call is accountable to
                the person who turns the wrench.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                  <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

      <CTABand title="Work With A Plumbing Company That Answers" />
    </>
  );
}
