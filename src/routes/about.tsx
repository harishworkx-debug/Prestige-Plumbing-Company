import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Wrench,
  Users,
  Camera,
  Activity,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";
import { images } from "@/data/images";
import {
  business,
  stats,
  whyChoose,
  process,
  leadership,
  diagnosticEquipment,
  realCaseStudies,
} from "@/data/site";
import { areas } from "@/data/areas";
import { Reveal } from "@/components/Reveal";
import { CTABand, CTAButtons, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, abs } from "@/lib/seo";

const title = `About ${business.name} | Licensed AZ ${business.rocLicense} Contractor`;
const description = `${business.name} is a family-owned plumbing contractor in Mesa, AZ (AZ ${business.rocLicense}). Master plumbers, upfront flat-rate pricing, and 24/7 emergency service. Call ${business.phoneDisplay}.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: meta(title, description, "/about"),
    links: [{ rel: "canonical", href: abs("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(webPageSchema(title, description, "/about")),
      },
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
      {/* HERO SECTION */}
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            center={false}
            title="A Trusted Family-Owned Plumbing Contractor"
            text={`${business.name} is a fully licensed, bonded, and insured plumbing contractor delivering expert residential and commercial plumbing across Mesa and the Phoenix East Valley.`}
          />

          {/* VERIFIED STATS / CREDENTIAL BAR */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                  <div className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButtons label="Schedule Service" />
            <a
              href={business.rocLicenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Verify License: {business.rocLicense}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* OUR STORY & LOCAL FOUNDATION */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={images.aboutTeam}
                alt={`${business.name} team in Mesa, Arizona`}
                width={1280}
                height={853}
                loading="lazy"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                  <ShieldCheck className="h-4 w-4" /> Verified Contractor
                </div>
                <div className="mt-1 font-display text-sm font-bold">{business.rocLicense}</div>
                <div className="text-[11px] text-muted-foreground">Bonded & Insured in AZ</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold">Our Story & Craftsmanship</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Founded right here in Mesa, Arizona, {business.name} began with a straightforward
                commitment: provide upfront written pricing before touching a wrench, perform
                flawless code-compliant craftsmanship, and stand behind every single repair with an
                honest guarantee.
              </p>
              <p>
                Arizona residential plumbing requires localized expertise. The East Valley’s severe
                water hardness rapidly scales water heater elements, hard caliche soils place
                unforgiving tension on buried water and sewer mains, and post-tension concrete slabs
                turn hidden leaks into expensive guesswork without the proper diagnostic technology.
              </p>
              <p>
                Under master plumbing leadership, our service trucks roll out as fully equipped
                mobile workshops loaded with high-resolution sewer cameras, subterranean acoustic
                leak detection instruments, and high-pressure jetters. We don’t guess — we inspect,
                diagnose, and solve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VERIFIED LICENSING & CREDENTIALS CARD */}
      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Verification & Compliance"
            title="State Licensing & Verified Credentials"
            text="We believe in total transparency. Every plumbing repair and gas line installation is completed under our official Arizona state contractor license."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">AZ State ROC License</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{business.rocLicense}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Active license with the Arizona Registrar of Contractors covering Commercial and
                  Residential plumbing installations.
                </p>
                <a
                  href={business.rocLicenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Verify on AZ ROC Portal <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">Bonded & Fully Insured</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Comprehensive Coverage</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Full surety bonding and general liability insurance on every job, protecting your
                  home, property, and surrounding landscape.
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Active policy verification on
                  file
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">Code-Compliant Permits</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Permitted & Inspected</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  We pull city permits for all gas lines, sewer line replacements, and major water
                  heaters, ensuring city inspection passes the first time.
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Mesa & East Valley municipal
                  code
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & TECHNICIAN PROFILES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="Real Leadership & Field Technicians"
            text="When you call our company, you are dealing with real local tradespeople who care about your home."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground">
                      <Users className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{leader.name}</h3>
                      <p className="text-sm font-semibold text-primary">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {leader.experience}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
                    <span className="rounded-full bg-muted px-3 py-1">On-Site Accountability</span>
                    <span className="rounded-full bg-muted px-3 py-1">Direct Communication</span>
                    <span className="rounded-full bg-muted px-3 py-1">East Valley Local</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHENTIC JOB CASE STUDIES */}
      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Authentic Job Case Studies & Customer Outcomes"
            text="Real plumbing challenges diagnosed and resolved for homeowners across the East Valley."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {realCaseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-primary">
                      <span>{cs.location}</span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5">Verified Job</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold">{cs.title}</h3>

                    <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                      <div>
                        <span className="font-bold text-foreground">Challenge: </span>
                        {cs.problem}
                      </div>
                      <div>
                        <span className="font-bold text-foreground">Solution: </span>
                        {cs.solution}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    Verified Customer:{" "}
                    <span className="font-semibold text-foreground">{cs.verifiedReviewer}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED DIAGNOSTIC EQUIPMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Equipment & Technology"
            title="Specialized Diagnostic Equipment"
            text="Quality plumbing starts with precise diagnosis. We invest in top-tier diagnostic technology to protect your foundation and pipes."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticEquipment.map((eq, i) => (
              <Reveal key={eq.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {i === 0 && <Camera className="h-5 w-5" />}
                    {i === 1 && <Activity className="h-5 w-5" />}
                    {i === 2 && <Sparkles className="h-5 w-5" />}
                    {i === 3 && <Wrench className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold">{eq.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {eq.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (CORRECTED, ACCURATE HEADINGS) */}
      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Accountability, Transparent Pricing & Proven Craftsmanship"
            text="Here is why homeowners across Mesa and Phoenix trust our plumbers when it matters most."
          />
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

      {/* OUR PROCESS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="How Every Plumbing Job Runs" />
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

      {/* SERVICE AREAS */}
      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Where We Work"
            title="Cities We Serve Across The East Valley"
            text="From our central Mesa base, our mobile plumbing units serve residential communities throughout the greater Phoenix metropolitan area."
          />
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

      {/* CALL TO ACTION BAND */}
      <CTABand title="Call The Family-Owned Plumber That Answers" />
    </>
  );
}

