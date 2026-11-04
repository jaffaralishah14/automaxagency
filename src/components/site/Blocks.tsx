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
  const shot = showcaseShots[kind];
  return (
    <figure className="showcase">
      <div className={`showcase-stage${kind === "browser" ? " has-phone" : ""}`}>
        <div className="showcase-frame">
          <div className="showcase-bar" aria-hidden="true"><span /><span /><span /></div>
          <div className="showcase-screen">
            {shot.desktop ? <img src={shot.desktop} alt={shot.label} loading="lazy" /> : <span className="showcase-empty">{shot.label}</span>}
          </div>
        </div>
        {kind === "browser" && (
          <div className="showcase-phone">
            {shot.mobile ? <img src={shot.mobile} alt="Mobile view" loading="lazy" /> : <span className="showcase-empty" />}
          </div>
        )}
      </div>
      <figcaption>{shot.caption}</figcaption>
    </figure>
  );
}
