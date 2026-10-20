import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { business, homeFaqs } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTAButtons, FAQList, MapEmbed, SectionHeading } from "@/components/ui-kit";
import { meta, breadcrumbSchema, webPageSchema, faqSchema, abs } from "@/lib/seo";

const title = `Contact Prestige Plumbing Company | Mesa, AZ`;
const description = `Need a plumber in Mesa, AZ? Contact Prestige Plumbing Company (AZ ROC #347689) at 1120 E Jarvis Ave for flat-rate estimates and 24/7 emergency service. Call (480) 681-3808.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: meta(title, description, "/contact"),
    links: [{ rel: "canonical", href: abs("/contact") }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema(title, description, "/contact")) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs.slice(0, 5))) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
  { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
  {
    icon: MapPin,
    label: "Business Location",
    value: `${business.street}, ${business.city}, ${business.state} ${business.zip}`,
    href: business.mapLink,
  },
  { icon: Clock, label: "Hours", value: business.hours },
  {
    icon: ShieldCheck,
    label: "State Contractor License",
    value: `${business.rocLicense} (Commercial & Residential)`,
    href: business.rocLicenseUrl,
  },
];

function ContactPage() {
  return (
    <>
      <section className="surface-panel py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Contact Us"
            center={false}
            title={`Contact ${business.name} in Mesa, AZ`}
            text="Call, email, or request service online. Our dispatch center is located at 1120 E Jarvis Ave in Mesa, serving homeowners across the East Valley 24 hours a day."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButtons label="Call (480) 681-3808" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <d.icon className="h-5 w-5 text-primary" />
                  <h2 className="mt-3 font-display text-lg font-bold">{d.label}</h2>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      <section className="surface-panel py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Questions Before You Call" />
          <div className="mt-10">
            <FAQList faqs={homeFaqs.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
}
