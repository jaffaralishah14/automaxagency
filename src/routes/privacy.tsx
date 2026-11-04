import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { EMAIL } from "@/lib/site-content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Automax" },
      { name: "description", content: "Privacy questions for Automax." },
      { property: "og:title", content: "Privacy — Automax" },
      { property: "og:description", content: "Privacy questions for Automax." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="utility-card">
            <p className="eyebrow">Legal</p>
            <h1>Privacy</h1>
            <p>
              For privacy questions, contact <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
