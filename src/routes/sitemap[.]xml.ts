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
        const currentDate = "2026-10-20";

        const entries: { path: string; lastmod: string }[] = [
          { path: "/", lastmod: currentDate },
          { path: "/services", lastmod: currentDate },
          { path: "/service-areas", lastmod: currentDate },
          { path: "/about", lastmod: currentDate },
          { path: "/reviews", lastmod: currentDate },
          { path: "/contact", lastmod: currentDate },
          { path: "/blog", lastmod: currentDate },
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date || currentDate })),
          ...services.map((s) => ({ path: `/${s.slug}`, lastmod: currentDate })),
          ...areas.map((a) => ({ path: `/${a.slug}`, lastmod: currentDate })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>`,
              `    <lastmod>${e.lastmod}</lastmod>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
