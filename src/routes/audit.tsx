import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowIcon, ChevronIcon } from "@/components/site/Icons";
import { EMAIL } from "@/lib/site-content";

const desc = "Pick a 15-minute slot that works for you. We’ll walk through your current setup together live.";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Schedule an audit call (15 min) — Automax" },
      { name: "description", content: desc },
      { property: "og:title", content: "Schedule an audit call (15 min) — Automax" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Audit,
});

const SLOTS = ["10:00 AM", "10:30 AM", "02:00 PM", "03:30 PM"];
const PRIORITIES = ["Web", "SEO", "Ads", "Auto"];
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function Audit() {
  const [today, setToday] = useState<Date | null>(null);
  const [month, setMonth] = useState<Date | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", url: "" });

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
    setMonth(new Date(t.getFullYear(), t.getMonth(), 1));
  }, []);

  const days = useMemo(() => {
    if (!month) return [];
    const first = month.getDay();
    const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = Array(first).fill(null);
    for (let d = 1; d <= count; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    return cells;
  }, [month]);

  const isAvailable = (d: Date) => !!today && d > today && d.getDay() !== 0 && d.getDay() !== 6;
  const atCurrentMonth = !!(today && month && month.getMonth() === today.getMonth() && month.getFullYear() === today.getFullYear());
  const shift = (n: number) => month && setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1));

  const ready = date && slot && priority && form.name.trim() && /\S+@\S+\.\S+/.test(form.email);

  const mailto = useMemo(() => {
    if (!date || !slot) return "#";
    const when = `${date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })} at ${slot} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`;
    const body = [`Name: ${form.name}`, `Work Email: ${form.email}`, `Website URL: ${form.url}`, `Priority: ${priority ?? ""}`, `Requested time: ${when}`].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent("Audit call booking (15 min)")}&body=${encodeURIComponent(body)}`;
  }, [date, slot, priority, form]);

  return (
    <div className="utility-page">
      <header className="site-header audit-header">
        <div className="container header-inner">
          <Link aria-label="Automax home" className="brand" to="/">
            <img alt="Automax" className="brand-logo" height={18} src="/assets/automax-logo.png" width={188} />
          </Link>
          <Link className="button button-ghost" to="/">
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </header>

      <main id="main" className="audit-main">
        <div className="container audit-layout">
          <section className="audit-context" aria-labelledby="audit-title">
            <p className="eyebrow">15-minute live review</p>
            <h1 id="audit-title">
              Let’s look at your website, traffic, <em>and workflows.</em>
            </h1>
            <p className="lede">{desc}</p>

            <p className="audit-points-label">What we walk through:</p>
            <ol className="audit-points" style={{ marginTop: 16 }}>
              <li><b>1.</b><div><strong>Your Website</strong><p>Where visitors might be getting stuck or bouncing.</p></div></li>
              <li><b>2.</b><div><strong>Traffic &amp; Search</strong><p>How customers find you and where the easy wins are.</p></div></li>
              <li><b>3.</b><div><strong>Repetitive Tasks</strong><p>Workflows you can automate to save hours each week.</p></div></li>
            </ol>

            <div className="founder-chip">
              <span aria-hidden="true" className="review-avatar">JM</span>
              <div><strong>Jawad Manzoor</strong><small>Founder, Automax</small></div>
            </div>
            <ul className="trust-list">
              <li>270+ projects delivered since 2018</li>
              <li>Clients across 10+ countries</li>
            </ul>
          </section>

          <section className="audit-booking" aria-labelledby="scheduler-title">
            <div className="scheduler">
              <div className="scheduler-head">
                <h2 id="scheduler-title">Select a Date &amp; Time</h2>
              </div>
              <div className="scheduler-body">
                <div className="cal-nav">
                  <strong>{month ? month.toLocaleDateString(undefined, { month: "long", year: "numeric" }) : "\u00a0"}</strong>
                  <div>
                    <button className="icon-btn" type="button" aria-label="Previous month" disabled={atCurrentMonth} onClick={() => shift(-1)}><ChevronIcon dir="left" /></button>
                    <button className="icon-btn" type="button" aria-label="Next month" onClick={() => shift(1)}><ChevronIcon dir="right" /></button>
                  </div>
                </div>
                <div className="cal-grid" role="grid">
                  {DOW.map((d) => <span key={d} className="dow">{d}</span>)}
                  {days.map((d, i) =>
                    d ? (
                      <button
                        key={i}
                        type="button"
                        className={`cal-day${date && sameDay(d, date) ? " is-selected" : ""}`}
                        disabled={!isAvailable(d)}
                        aria-pressed={!!date && sameDay(d, date)}
                        onClick={() => { setDate(d); setSlot(null); }}
                      >
                        {d.getDate()}
                      </button>
                    ) : (
                      <span key={i} />
                    ),
                  )}
                </div>

                <span className="block-label">Available Time Slots (Your Time)</span>
                <div className="slot-grid">
                  {SLOTS.map((s) => (
                    <button key={s} type="button" className={`pill${slot === s ? " is-selected" : ""}`} disabled={!date} aria-pressed={slot === s} onClick={() => setSlot(s)}>
                      {s}
                    </button>
                  ))}
                </div>

                <span className="block-label">Intake Fields</span>
                <div className="fields">
                  <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                  <div className="field"><label htmlFor="f-email">Work Email</label><input id="f-email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div className="field"><label htmlFor="f-url">Website URL</label><input id="f-url" type="url" inputMode="url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} /></div>
                </div>

                <span className="block-label" id="priority-label">Priority</span>
                <div className="priority-grid" role="radiogroup" aria-labelledby="priority-label">
                  {PRIORITIES.map((p) => (
                    <button key={p} type="button" role="radio" aria-checked={priority === p} className={`pill${priority === p ? " is-selected" : ""}`} onClick={() => setPriority(p)}>
                      {p}
                    </button>
                  ))}
                </div>

                <a
                  className="button button-primary button-large"
                  href={ready ? mailto : undefined}
                  aria-disabled={!ready}
                  style={ready ? undefined : { opacity: 0.45, pointerEvents: "none" }}
                >
                  <span>Confirm Booking</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <p className="scheduler-note">Your meeting link and calendar invite will be emailed immediately.</p>
          </section>
        </div>
      </main>
      <footer className="utility-footer">© 2026 Automax. All rights reserved.</footer>
    </div>
  );
}
