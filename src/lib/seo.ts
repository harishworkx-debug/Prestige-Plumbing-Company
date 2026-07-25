import { business } from "@/data/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: business.name,
  image: "/favicon.ico",
  telephone: business.phoneDisplay,
  email: business.email,
  url: "/",
  priceRange: "$$",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: business.lat, longitude: business.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    "Mesa AZ",
    "Phoenix AZ",
    "Chandler AZ",
    "Gilbert AZ",
    "Tempe AZ",
    "Scottsdale AZ",
    "Glendale AZ",
    "Queen Creek AZ",
    "San Tan Valley AZ",
    "Ahwatukee AZ",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "487" },
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  description,
  url: path,
  provider: { "@type": "Plumber", name: business.name, telephone: business.phoneDisplay },
  areaServed: { "@type": "City", name: "Mesa, Arizona" },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.path,
  })),
});

export const meta = (title: string, description: string, path: string, type = "website") => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:url", content: path },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
];
