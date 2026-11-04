import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { EMAIL } from "@/lib/site-content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Automax" },
      { name: "description", content: "Terms questions for Automax." },
      { property: "og:title", content: "Terms — Automax" },
      { property: "og:description", content: "Terms questions for Automax." },
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
            <h1>Terms</h1>
            <p>
              For questions about our terms, contact <a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
