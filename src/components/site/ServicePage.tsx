import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-content";
import { CtaBanner, SiteLayout } from "./Layout";
import { Faq, ServiceVisual, Stars } from "./Blocks";
import { ArrowIcon, CheckIcon, Scallop } from "./Icons";

export function serviceHead(s: Service) {
  const title = `${s.name} — Automax`;
  return {
    meta: [
      { title },
      { name: "description", content: s.intro },
      { property: "og:title", content: title },
      { property: "og:description", content: s.intro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function ServicePage({ service: s }: { service: Service }) {
  const accentStart = s.title.indexOf(s.titleAccent);
  const reviewSource = s.proof?.source === undefined ? "Fiverr" : s.proof.source;
  return (
    <SiteLayout>
      <section className="hero page-hero dark-dots" aria-labelledby="service-title">
        <div aria-hidden="true" className="hero-glow" />
        <span aria-hidden="true" className="spark spark-one" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-dark crumb">
            <Link to="/">Automax</Link>
            <i>/</i>
            <b>{s.name}</b>
          </p>
          <h1 id="service-title">
            {accentStart < 0 ? s.title : <>{s.title.slice(0, accentStart)}<em>{s.titleAccent}</em>{s.title.slice(accentStart + s.titleAccent.length)}</>}
          </h1>
          <p className="hero-lede">{s.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary button-large" to="/audit">
              <span>Schedule an audit call (15 min)</span>
              <ArrowIcon />
            </Link>
          </div>
          <div className="hero-visual">
            <ServiceVisual kind={s.visual} />
          </div>
        </div>
        <Scallop />
      </section>

      <section className="section" aria-labelledby="help-title">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">What we help with</p>
            <h2 id="help-title">
              What we <em>solve.</em>
            </h2>
          </div>
          <div className={`card-grid solve-grid${s.helpWith.length === 4 ? " cols-4" : ""}`}>
            {s.helpWith.map((item, i) => (
              <article key={item} className="line-card">
                <span className="solve-number">0{i + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" aria-labelledby="included-title">
        <div className="container split">
          <div className="section-heading">
            <p className="eyebrow">Deliverables</p>
            <h2 id="included-title">
              What’s <em>included.</em>
            </h2>
          </div>
          <ul className="check-list">
            {s.included.map((item) => (
              <li key={item}>
                <span className="check">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {s.proof && (
        <section className="section" aria-label="Client review">
          <div className="container">
            <figure className="proof-card">
              <div>
                <Stars />
                <blockquote><span className="q-mark">“</span>{s.proof.quote}<span className="q-mark">”</span></blockquote>
                <figcaption>
                  <span aria-hidden="true" className="review-avatar">
                    {s.proof.name.charAt(0).toUpperCase()}
                  </span>
                  <span>
                    <strong>{s.proof.name}</strong>
                    <small>{s.proof.country}{reviewSource ? ` · ${reviewSource}` : ""}</small>
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>
      )}

      <section className={`section faq-section${s.proof ? "" : ""}`} aria-labelledby="sfaq-title">
        <div className="container faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">{s.name}</p>
            <h2 id="sfaq-title">FAQ</h2>
          </div>
          <Faq items={s.faq} idPrefix={`faq-${s.slug}`} />
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Ready to talk through
            <br />
            <em>what you need?</em>
          </>
        }
        text="Pick a time for a live 15-minute review of your site, traffic, and workflows."
      />
    </SiteLayout>
  );
}
