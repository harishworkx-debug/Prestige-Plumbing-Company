import { business, socials, SITE_URL } from "@/data/site";

/** Absolute URL for a site-relative path. */
export const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.street,
  addressLocality: business.city,
  addressRegion: business.state,
  postalCode: business.zip,
  addressCountry: "US",
};

const areaServed = [
  "Mesa AZ",
  "Gilbert AZ",
  "Chandler AZ",
  "Tempe AZ",
  "Scottsdale AZ",
  "Phoenix AZ",
  "Apache Junction AZ",
  "Queen Creek AZ",
  "Fountain Hills AZ",
  "Paradise Valley AZ",
  "San Tan Valley AZ",
  "Glendale AZ",
  "Ahwatukee AZ",
  "East Valley AZ",
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService" as string],
  "@id": `${SITE_URL}/#localbusiness`,
  name: business.name,
  image: abs("/favicon.ico"),
  telephone: business.phoneDisplay,
  email: business.email,
  url: abs("/"),
  hasMap: business.mapLink,
  priceRange: "$$",

  sameAs: socials.map((s) => s.href),
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", latitude: business.lat, longitude: business.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: business.name,
  url: abs("/"),
  logo: abs("/favicon.ico"),
  telephone: business.phoneDisplay,
  email: business.email,
  address: postalAddress,
  sameAs: socials.map((s) => s.href),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: business.name,
  url: abs("/"),
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const webPageSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${abs(path)}#webpage`,
  name,
  description,
  url: abs(path),
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#localbusiness` },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (
  name: string,
  description: string,
  path: string,
  city = "Mesa",
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name: `${name} in ${city}, AZ`,
  description,
  url: abs(path),
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: business.name,
    telephone: business.phoneDisplay,
    address: postalAddress,
  },
  areaServed: { "@type": "City", name: `${city}, Arizona` },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const articleSchema = (title: string, description: string, path: string, date: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: date,
  mainEntityOfPage: abs(path),
  author: { "@type": "Organization", name: business.name },
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const meta = (title: string, description: string, path: string, type = "website") => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:url", content: abs(path) },
  { property: "og:site_name", content: business.name },
  { property: "og:locale", content: "en_US" },
  { property: "og:phone_number", content: business.phoneDisplay },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
];
