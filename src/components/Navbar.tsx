import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { business, nav } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-secondary py-2 text-center text-xs font-medium text-secondary-foreground md:block">
        Emergency Plumbing Available 24/7 · {business.street}, {business.city}, {business.state}{" "}
        {business.zip} ·{" "}
        <a href={business.phoneHref} className="text-accent underline-offset-4 hover:underline">
          {business.phoneDisplay}
        </a>
      </div>
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass-card border-b" : "bg-background"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-brand text-primary-foreground shadow-card">
              <Droplets className="h-6 w-6" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight font-bold">
                Prestige Plumbing
              </span>
              <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Mesa
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 rounded-full gradient-brand px-5 py-3 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:scale-105 sm:flex"
            >
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 pb-5 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
