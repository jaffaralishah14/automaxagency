import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { EMAIL } from "@/lib/site-content";
import { ArrowIcon } from "./Icons";

const navItems = [
  { label: "Services", hash: "services" },
  { label: "How it Works", hash: "process" },
  { label: "Reviews", hash: "reviews" },
  { label: "About", to: "/about" as const },
  { label: "FAQ", hash: "faq" },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {navItems.map((item) =>
        item.to ? (
          <Link key={item.label} to={item.to} activeProps={{ className: "active" }} onClick={onClick}>
            {item.label}
          </Link>
        ) : (
          <Link key={item.label} to="/" hash={item.hash} onClick={onClick} activeOptions={{ includeHash: true }}>
            {item.label}
          </Link>
        ),
      )}
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link aria-label="Automax home" className="brand" to="/">
          <img alt="Automax" className="brand-logo" height={18} src="/assets/automax-logo.png" width={188} />
        </Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          <NavLinks />
        </nav>
        <Link className="button button-primary header-cta" to="/audit">
          <span>Schedule call</span>
          <ArrowIcon />
        </Link>
        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="mobile-menu" hidden={!open} id="mobile-menu">
        <div className="container mobile-menu-inner">
          <NavLinks onClick={() => setOpen(false)} />
          <Link className="button button-primary" to="/audit" onClick={() => setOpen(false)}>
            <span>Schedule call</span>
            <ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link aria-label="Automax home" className="brand brand-light" to="/">
            <img alt="Automax" className="brand-logo" height={20} src="/assets/automax-logo-light.png" width={210} />
          </Link>
          <p>Modern websites and systems.</p>
        </div>
        <nav aria-label="Services" className="footer-col">
          <h3>Services</h3>
          <Link to="/services/web-design">Web Design</Link>
          <Link to="/services/seo">SEO</Link>
          <Link to="/services/paid-ads">Paid Ads</Link>
          <Link to="/services/automations">Automation</Link>
        </nav>
        <nav aria-label="Company" className="footer-col">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/" hash="process">Process</Link>
          <Link to="/" hash="faq">FAQ</Link>
        </nav>
        <nav aria-label="Legal and contact" className="footer-col">
          <h3>Legal &amp; Contact</h3>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Automax. All rights reserved.</p>
        <p>
          <strong>270+</strong> Projects Delivered Worldwide.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

export function CtaBanner({ eyebrow = "Schedule call", title, text }: { eyebrow?: string; title: ReactNode; text?: string }) {
  return (
    <section className="section contact-section">
      <div className="container">
        <div className="contact-panel dark-dots">
          <div aria-hidden="true" className="contact-glow" />
          <p className="eyebrow eyebrow-dark">{eyebrow}</p>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : <div style={{ height: 32 }} />}
          <Link className="button button-primary button-large" to="/audit">
            <span>Schedule an audit call (15 min)</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
