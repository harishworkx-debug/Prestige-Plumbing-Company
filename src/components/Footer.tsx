import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Droplets, MessageCircle } from "lucide-react";
import { business, nav } from "@/data/site";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground">
                <Droplets className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-bold">Prestige Plumbing</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">
              Family owned, licensed, bonded and insured plumbing contractor serving Mesa and the
              Phoenix metro since 2005. Residential and commercial plumbing, 24 hours a day.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Licensed", "Bonded", "Insured", "24/7"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Plumbing Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              {services.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/$slug"
                    params={{ slug: s.slug }}
                    className="transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-semibold text-accent">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Service Areas</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/$slug"
                    params={{ slug: a.slug }}
                    className="transition-colors hover:text-accent"
                  >
                    Plumber in {a.city}, AZ
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={business.phoneHref} className="hover:text-accent">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${business.email}`} className="hover:text-accent">
                  {business.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {business.street}
                  <br />
                  {business.city}, {business.state} {business.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{business.hours}</span>
              </li>
            </ul>
            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="text-secondary-foreground/60 hover:text-accent">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-secondary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Prestige Plumbing Company. Licensed · Bonded · Insured.</p>
          <p>Serving Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale, Glendale & beyond.</p>
        </div>
      </div>
    </footer>
  );
}
