import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, SiteLayout } from "@/components/site/Layout";
import { Scallop } from "@/components/site/Icons";

const desc = "Automax brings website design, SEO, paid ads, and automation together under one roof.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Automax — Meet founder Jawad Manzoor" },
      { name: "description", content: desc },
      { property: "og:title", content: "About Automax — Meet founder Jawad Manzoor" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const principles = [
  { n: "01", t: "Talk Directly", d: "You communicate directly with senior builders, never junior account reps." },
  { n: "02", t: "Agree First", d: "Scope and fixed price are locked in before any work begins. No surprise invoices." },
  { n: "03", t: "See Progress", d: "Live sprint updates and continuous visibility; no blackout periods." },
];

const tools = [
  { t: "Custom React/Code", p: "M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" },
  { t: "Modern CMS", p: "M4 5h16v14H4zM4 9h16M9 9v10" },
  { t: "Zapier & Make", p: "M13 3 5 14h7l-1 7 8-11h-7l1-7Z" },
  { t: "Google & Meta Ads", p: "M4 20V10M10 20V4M16 20v-7M22 20H2" },
];

function About() {
  return (
    <SiteLayout>
      <section className="hero page-hero dark-dots" aria-labelledby="about-title">
        <div aria-hidden="true" className="hero-glow" />
        <span aria-hidden="true" className="spark spark-one" />
        <span aria-hidden="true" className="spark spark-two" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-dark">About</p>
          <h1 id="about-title">
            Direct access to the people <em>doing the work.</em>
          </h1>
          <p className="hero-lede">{desc}</p>
        </div>
        <Scallop />
      </section>

      <section className="section founder-section" aria-labelledby="founder-title">
        <div className="container">
          <div className="founder-panel">
            <div className="founder-photo dark-dots">
              <span className="initials" aria-hidden="true">JM</span>
              <span className="spark" style={{ right: "16%", top: "18%" }} aria-hidden="true" />
              <small>Portrait to be added</small>
            </div>
            <div className="founder-quote">
              <h2 id="founder-title">Meet Jawad Manzoor, Founder.</h2>
              <span aria-hidden="true" className="quote-mark">“</span>
              <blockquote>
                Since 2018, our team has delivered 270+ projects for businesses in 10+ countries. I started Automax so clients can work with one senior team that takes responsibility for the result, instead of managing several disjointed{" "}
                <span className="quote-end">
                  agencies<span className="ember-comma">.</span>
                  <span aria-hidden="true" className="quote-mark quote-mark-end">”</span>
                </span>
              </blockquote>
              <p><strong>Jawad Manzoor</strong><span>Founder, Automax</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint" aria-labelledby="principles-title">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">How we operate</p>
            <h2 id="principles-title">
              Operating <em>principles.</em>
            </h2>
          </div>
          <div className="card-grid solve-grid">
            {principles.map((p) => (
              <article key={p.n} className="line-card">
                <span className="solve-number">{p.n}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="container">
          <div className="section-heading section-heading-center compact-heading">
            <p className="eyebrow">Stack</p>
            <h2 id="tools-title">
              Tools &amp; <em>platforms.</em>
            </h2>
          </div>
          <div className="tool-row">
            {tools.map((t) => (
              <span key={t.t}>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d={t.p} /></svg>
                {t.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner eyebrow="Schedule call" title={<>Work directly with <em>our team.</em></>} />
    </SiteLayout>
  );
}
