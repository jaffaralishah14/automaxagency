import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, SiteLayout } from "@/components/site/Layout";
import { ProofStats, ReviewCard, VideoGrid } from "@/components/site/Blocks";
import { Scallop } from "@/components/site/Icons";
import { wallReviews } from "@/lib/site-content";

const title = "270+ projects delivered. Here’s what clients say.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Automax" },
      { name: "description", content: title },
      { property: "og:title", content: "Client Reviews — Automax" },
      { property: "og:description", content: title },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <SiteLayout>
      <section className="hero page-hero dark-dots" aria-labelledby="reviews-title">
        <div aria-hidden="true" className="hero-glow" />
        <span aria-hidden="true" className="spark spark-one" />
        <span aria-hidden="true" className="spark spark-two" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-dark">Client feedback</p>
          <h1 id="reviews-title">
            270+ projects delivered. <em>Here’s what clients say.</em>
          </h1>
          <ProofStats />
        </div>
        <Scallop />
      </section>

      <section className="section" aria-label="Video testimonials">
        <div className="container">
          <div className="section-heading section-heading-center compact-heading">
            <p className="eyebrow">Video testimonials</p>
          </div>
          <VideoGrid />
        </div>
      </section>

      <section className="section reviews-section" aria-label="Written reviews" style={{ paddingTop: 96 }}>
        <div className="container">
          <div className="section-heading section-heading-center compact-heading">
            <p className="eyebrow">Written reviews</p>
          </div>
          <div className="review-wall">
            {wallReviews.map((r, i) => <ReviewCard key={i} review={r} source={false} />)}
          </div>
        </div>
      </section>

      <CtaBanner title={<>Want to talk about <em>your project?</em></>} />
    </SiteLayout>
  );
}
