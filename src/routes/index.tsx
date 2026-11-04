import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner, SiteLayout } from "@/components/site/Layout";
import { Faq, ProofStats, ReviewCard, ServiceVisual, VideoGrid } from "@/components/site/Blocks";
import { ArrowIcon, Scallop } from "@/components/site/Icons";
import { homeReviews, type ServiceSlug } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automax — Web Design, SEO, Paid Ads & Automations" },
      { name: "description", content: "Automax builds modern websites, brings you customers, and automates the rest." },
      { property: "og:title", content: "Automax — Web Design, SEO, Paid Ads & Automations" },
      { property: "og:description", content: "Automax builds modern websites, brings you customers, and automates the rest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const homeServices: {
  slug: ServiceSlug;
  name: string;
  title: string;
  body: string;
  includes: string[];
  visual: "browser" | "seo" | "ads" | "automation";
}[] = [
  { slug: "web-design", name: "Web Design", title: "Fast, modern websites that help turn visitors into customers.", body: "We design and build clean websites from scratch. No slow templates or bloated page builders. Just fast load times, clear mobile layouts, and simple paths to take action.", includes: ["Custom design", "Mobile-first layouts", "Performance-focused build", "Simple CMS setup"], visual: "browser" },
  { slug: "seo", name: "SEO", title: "Show up on Google when customers search for what you do.", body: "We find and fix technical issues, research relevant search terms, and improve the pages customers use to decide.", includes: ["Technical audit", "Keyword research", "On-page improvements", "Clear reporting"], visual: "seo" },
  { slug: "paid-ads", name: "Paid Ads", title: "Reach more of the right people on Google and Meta.", body: "We set up and manage campaigns, test creative and copy, and track results so you can see where your budget goes.", includes: ["Campaign setup", "Google and Meta ads", "Ad copy and creative testing", "Reporting"], visual: "ads" },
  { slug: "automations", name: "Automation", title: "Connect your tools and spend less time on repeat tasks.", body: "We connect your forms, CRM, and communication tools so leads can be routed, teams notified, and records updated automatically.", includes: ["Lead routing", "Email follow-ups", "Zapier/Make integrations", "Onboarding workflows"], visual: "automation" },
];

const homeFaq = [
  { q: "What does it cost?", a: "Pricing depends on what you need. You see the exact price before you agree to anything." },
  { q: "Do I need all four services?", a: "No. Start with the one you need most." },
  { q: "Who will I be working with?", a: "You work directly with senior builders, not junior account managers." },
  { q: "What tools and platforms do you use?", a: "Custom code, modern CMS platforms, Zapier, Make, Google Ads, and Meta Ads. We work with tools you own and control." },
];

function Index() {
  const [openService, setOpenService] = useState(0);
  return (
    <SiteLayout>
      <section aria-labelledby="hero-title" className="hero dark-dots">
        <div aria-hidden="true" className="hero-glow" />
        <span aria-hidden="true" className="spark spark-one" />
        <span aria-hidden="true" className="spark spark-two" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-dark">
            Web design <span>·</span> SEO <span>·</span> Paid ads <span>·</span> Automations
          </p>
          <h1 id="hero-title">
            We build your website
            <br />
            <em>bring you customers</em>
            <br />
            and automate the rest.
          </h1>
          <div className="hero-actions">
            <Link className="button button-primary button-large" to="/audit">
              <span>Schedule an audit call (15 min)</span>
              <ArrowIcon />
            </Link>
            <Link className="button button-outline button-large" to="/" hash="reviews">
              See reviews
            </Link>
          </div>
          <p className="hero-support">A live review of your site, traffic, and workflows.</p>
          <div aria-label="See how we work in 90 seconds. Video preview; actual video to be supplied." className="vsl-frame" role="img">
            <div aria-hidden="true" className="vsl-topbar"><span /><span /><span /></div>
            <div aria-hidden="true" className="vsl-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <img alt="" height={104} src="/assets/automax-mark.png" width={160} />
            </div>
            <div className="vsl-caption">
              <span aria-hidden="true" className="play-mark">
                <svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg>
              </span>
              <span>See how we work in 90 seconds</span>
            </div>
          </div>
          <ProofStats />
          <div className="client-logo-marquee" aria-label="Client logos">
            <span className="client-logos-label">Client logos</span>
            <div className="client-logo-window">
              {[0, 1].map((t) => (
                <div key={t} aria-hidden={t === 1 || undefined} className="client-logo-track">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="client-logo-slot">Logo to be added</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Scallop />
      </section>

      <section aria-labelledby="services-title" className="section services" id="services">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">
              <em>Four core services.</em>
              <br />
              One unified team.
            </h2>
            <p className="section-intro">We handle every step of your digital presence so you don’t have to manage four separate agencies.</p>
          </div>
          <div className="service-list">
            {homeServices.map((s, i) => {
              const open = openService === i;
              return (
                <article key={s.slug} className={`service-item${open ? " is-open" : ""}`}>
                  <button
                    aria-controls={`service-${s.slug}`}
                    aria-expanded={open}
                    className="service-trigger"
                    id={`service-${s.slug}-trigger`}
                    type="button"
                    onClick={() => setOpenService(open ? -1 : i)}
                  >
                    <span className="service-number">00{i + 1}</span>
                    <span className="service-name">{s.name}</span>
                    <span aria-hidden="true" className="round-icon">
                      <svg viewBox="0 0 20 20"><path d="M10 4v12M4 10h12" /></svg>
                    </span>
                  </button>
                  <div aria-labelledby={`service-${s.slug}-trigger`} className="service-panel" hidden={!open} id={`service-${s.slug}`} role="region">
                    <div className="service-panel-inner">
                      <div className="service-copy">
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                        <p className="includes-label">Includes:</p>
                        <ul className="includes-list">
                          {s.includes.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                        <Link className="service-link" to={`/services/${s.slug}`}>
                          {s.name} <ArrowIcon />
                        </Link>
                      </div>
                      <ServiceVisual kind={s.visual} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="reviews-title" className="section reviews-section" id="reviews">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">Client stories</p>
            <h2 id="reviews-title">
              Trusted by clients
              <br />
              <em>around the world.</em>
            </h2>
            <p className="section-intro">Hear directly from people who have worked with Automax.</p>
          </div>
          <div className="video-testimonials" aria-label="Video testimonials">
            <VideoGrid />
          </div>
          <div className="reviews-grid">
            {homeReviews.map((r) => <ReviewCard key={r.name} review={r} />)}
          </div>
          <div className="center-action">
            <Link className="button button-ghost" to="/reviews">
              <span>Reviews</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="section founder-section" id="about">
        <div className="container">
          <div className="section-heading section-heading-center compact-heading">
            <p className="eyebrow">Founder</p>
            <h2 id="founder-title">Meet Jawad.</h2>
          </div>
          <div className="founder-panel">
            <div aria-hidden="true" className="founder-visual dark-dots">
              <img alt="" height={169} src="/assets/automax-mark.png" width={260} />
              <span className="spark" />
            </div>
            <div className="founder-quote">
              <span aria-hidden="true" className="quote-mark">“</span>
              <blockquote>
                Since 2018, our team has delivered 270+ projects for businesses in 10+ countries. I started Automax so you deal with one team that answers for the result, instead of managing several{" "}
                <span className="quote-end">
                  agencies<span className="ember-comma">.</span>
                  <span aria-hidden="true" className="quote-mark quote-mark-end">”</span>
                </span>
              </blockquote>
              <p><strong>Jawad Manzoor</strong><span>Founder, Automax</span></p>
              <Link className="service-link" to="/about" style={{ alignSelf: "flex-start" }}>
                About <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="section process-section" id="process">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">How it works</p>
            <h2 id="process-title">
              Simple process.
              <br />
              <em>Clear next steps.</em>
            </h2>
            <p className="section-intro">From your first audit to the start of the work, the steps are clear.</p>
          </div>
          <div className="process-grid">
            <article className="process-step"><span className="step-number">01</span><h3>Audit Call (15 min)</h3><p>We review your site, traffic, and workflows to identify what needs attention.</p></article>
            <article className="process-step"><span className="step-number">02</span><h3>Scope &amp; Price</h3><p>We outline the plan and price. Nothing starts until you review it and say yes.</p></article>
            <article className="process-step"><span className="step-number">03</span><h3>Build, Launch &amp; Automate</h3><p>We build the agreed work, connect your tools where needed, and keep you updated along the way.</p></article>
          </div>
        </div>
      </section>

      <section aria-labelledby="industries-title" className="section industries-section" id="industries">
        <div className="container industries-container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">Who we help</p>
            <h2 id="industries-title">Built for <em>growing businesses.</em></h2>
          </div>
          <div aria-label="Industries we serve" className="industry-box">
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 17V9l8-5 8 5v8M8 20v-7h8v7M2 20h20" /></svg>B2B &amp; SaaS</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8ZM9 9V6a3 3 0 0 1 6 0v3" /></svg>E-Commerce &amp; DTC</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" /></svg>Professional Services</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>Local Businesses</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5c3-3 6-2 6-2s1 3-2 6l-5 5-4-4 5-5ZM9 10l-5 1 3 3M13 14l-1 5-3-3M7 17l-3 3M5 14l-2 1M10 19l-1 2" /><circle cx="16" cy="7" r="1.5" /></svg>Startups</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2M15 6l3-3 3 3M18 3v8" /></svg>Growing Businesses</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">FAQ</h2>
          </div>
          <Faq items={homeFaq} idPrefix="home-faq" />
        </div>
      </section>

      <CtaBanner
        title={<>Ready to talk through<br /><em>what you need?</em></>}
        text="Pick a time for a live 15-minute review of your site, traffic, and workflows."
      />
    </SiteLayout>
  );
}
