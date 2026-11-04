import { useState } from "react";
import type { Review, Service } from "@/lib/site-content";

export function Faq({ items, idPrefix, firstOpen = true }: { items: { q: string; a: string }[]; idPrefix: string; firstOpen?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(firstOpen ? [0] : []));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <article key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <h3>
              <button
                aria-controls={`${idPrefix}-a-${i}`}
                aria-expanded={isOpen}
                id={`${idPrefix}-q-${i}`}
                type="button"
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="faq-icon" />
              </button>
            </h3>
            <div aria-labelledby={`${idPrefix}-q-${i}`} className="faq-answer" hidden={!isOpen} id={`${idPrefix}-a-${i}`} role="region">
              <p>{item.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function Stars() {
  return (
    <div aria-label="Rated 5 out of 5 stars" className="review-rating" role="img">
      <span aria-hidden="true">★★★★★</span>
    </div>
  );
}

export function ReviewCard({ review, source = true }: { review: Review; source?: boolean }) {
  const initial = (review.name || "C").charAt(0).toUpperCase();
  return (
    <figure className="review-card">
      <div>
        <Stars />
        <blockquote>“{review.quote}”</blockquote>
      </div>
      {review.name && (
        <figcaption>
          <span aria-hidden="true" className="review-avatar">
            {initial}
          </span>
          <span>
            <strong>{review.name}</strong>
            {review.country && (
              <small>
                {review.country}
                {source ? " · Fiverr" : ""}
              </small>
            )}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

export function VideoGrid() {
  return (
    <div className="video-grid">
      {[1, 2, 3].map((n) => (
        <article key={n} className="video-card">
          <div aria-hidden="true" className="video-thumb dark-dots">
            <span className="video-orbit" />
            <span className="video-play">
              <svg viewBox="0 0 24 24">
                <path d="m9 7 8 5-8 5V7Z" />
              </svg>
            </span>
            <span className="video-status">Video file to be added</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProofStats() {
  return (
    <div aria-label="Company proof points" className="proof-grid">
      <div className="proof-item"><strong><em>270+</em></strong><span>Projects Delivered</span></div>
      <div className="proof-item"><strong><em>Top Rated</em></strong><span>on Fiverr</span></div>
      <div className="proof-item"><strong>Since<br /><em>2018</em></strong></div>
      <div className="proof-item"><strong>Clients in<br /><em>10+ Countries</em></strong></div>
    </div>
  );
}

export function ServiceVisual({ kind }: { kind: Service["visual"] }) {
  if (kind === "browser")
    return (
      <div aria-label="Browser window with desktop and mobile preview" className="micro-ui browser-ui" role="img">
        <div className="browser-bar"><span /><span /><span /><i /></div>
        <div className="browser-canvas">
          <div className="mock-desktop"><div className="mock-nav" /><div className="mock-title" /><div className="mock-title short" /><div className="mock-button" /><div className="mock-columns"><i /><i /><i /></div></div>
          <div className="mock-mobile"><div className="mock-nav" /><div className="mock-title" /><div className="mock-title short" /><div className="mock-button" /></div>
        </div>
      </div>
    );
  if (kind === "seo")
    return (
      <div className="micro-ui seo-ui">
        <span className="sample-label">Sample visualization</span>
        <div className="search-result"><div className="search-line" /><div className="search-title" /><div className="search-copy" /><div className="search-copy short" /></div>
        <div aria-hidden="true" className="ranking-chart">
          {["28%", "42%", "38%", "62%", "76%", "92%"].map((h, i) => (
            <i key={i} style={{ ["--h" as string]: h }} />
          ))}
        </div>
      </div>
    );
  if (kind === "ads")
    return (
      <div className="micro-ui ads-ui">
        <span className="sample-label">Sample campaign</span>
        {[0, 1, 2].map((r) => (
          <div key={r} className="campaign-row"><span /><i /><i /><i /></div>
        ))}
        <div className="campaign-key"><b /><b /><b /></div>
      </div>
    );
  const nodes = ["Form", "Rules", "CRM", "Team notification"];
  return (
    <div aria-label="Form to Rules to CRM to Team notification workflow" className="micro-ui automation-ui" role="img">
      <span className="sample-label">Sample data</span>
      {nodes.map((n, i) => (
        <span key={n} style={{ display: "contents" }}>
          <div className="flow-node">{n}</div>
          {i < nodes.length - 1 && (
            <svg aria-hidden="true" viewBox="0 0 40 16"><path d="M2 8h34m-6-5 6 5-6 5" /></svg>
          )}
        </span>
      ))}
    </div>
  );
}
