import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { posts } from "@/data/blog";
import { SITE_URL } from "@/data/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq: string; priority: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/service-areas", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/reviews", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6" })),
          ...services.map((s) => ({ path: `/${s.slug}`, changefreq: "monthly", priority: "0.8" })),
          ...areas.map((a) => ({ path: `/${a.slug}`, changefreq: "monthly", priority: "0.8" })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${SITE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
