export const EMAIL = "hello@automax.agency";

export type Review = { quote: string; name: string; country: string; source?: string | null };

// Home page reviews (from the original homepage).
export const homeReviews: Review[] = [
  { quote: "I’ve been using their services for our business for four times now, and I’m always blown away by the results.", name: "keepit3llc", country: "United States" },
  { quote: "High quality product delivered on time and exactly according to specs. Superb design and revisions are fast and accurate.", name: "paul_timmer", country: "Netherlands" },
  { quote: "We ran into several stumbling blocks, but they worked right through them.", name: "lisadillon50", country: "United States" },
  { quote: "This is the second time I have entrusted him with a very important project. That says a lot.", name: "cavnj1", country: "United States" },
  { quote: "Jawad and his team [are] awesome! […] We had some custom coding we needed done and they came through.", name: "cdavis3344", country: "United States" },
];

// Reviews page wall (content supplied for /reviews).
export const wallReviews: Review[] = [
  { quote: "I am using his service for the 4th time... He delivers on time.", name: "dima_9000", country: "Canada" },
  { quote: "High quality product delivered on time and exactly according to specs.", name: "paul_timmer", country: "Netherlands" },
  { quote: "He understood my requirements very well and delivered quality on time.", name: "", country: "" },
  { quote: "Very patient with revisions. Willing to go above and beyond!", name: "thinkandwin", country: "US" },
  { quote: "They were able to fill in the gaps... zoom call was super helpful.", name: "lisadillon50", country: "US" },
  { quote: "Fast and reliable, uncomplicated gig.", name: "twinriverco", country: "Germany" },
];

export type ServiceSlug = "web-design" | "seo" | "paid-ads" | "automations";

export type Service = {
  slug: ServiceSlug;
  name: string;
  title: string;
  titleAccent: string;
  intro: string;
  visual: "browser" | "seo" | "ads" | "automation";
  helpWith: string[];
  included: string[];
  faq: { q: string; a: string }[];
  proof?: Review;
};

export const services: Record<ServiceSlug, Service> = {
  "web-design": {
    slug: "web-design",
    name: "Web Design",
    title: "A clear, modern website for your business.",
    titleAccent: "modern website",
    intro: "We design and build fast, easy-to-use websites that make it clear what you offer and what visitors can do next.",
    visual: "browser",
    helpWith: ["Outdated design", "Difficult mobile experience", "Unclear page structure"],
    included: ["Custom design", "Responsive build", "Clear page flow and calls to action", "CMS setup when needed"],
    faq: [
      { q: "What does the project include?", a: "Custom design, a responsive build, a clear page flow and calls to action, and CMS setup when needed. The exact scope is agreed before any work begins." },
      { q: "Can I update the site after launch?", a: "Yes. When needed, we set up a simple CMS so you can update your content yourself." },
      { q: "How long will it take?", a: "It depends on the scope. We give you a specific timeline once the scope is confirmed." },
    ],
    proof: homeReviews[1],
  },
  seo: {
    slug: "seo",
    name: "SEO",
    title: "Help the right people find your business on Google.",
    titleAccent: "the right people",
    intro: "We review your site, fix technical issues, and improve pages around searches that matter to your business.",
    visual: "seo",
    helpWith: ["Technical issues", "Unfocused search targeting", "Pages that need clearer information"],
    included: ["Technical review", "Keyword research", "On-page improvements", "Reporting"],
    faq: [
      { q: "What does SEO work involve?", a: "A technical review of your site, keyword research, and on-page improvements to the pages customers use to decide." },
      { q: "How will progress be reported?", a: "You get clear reporting on the work completed and how your pages are performing in search." },
      { q: "How long does SEO take?", a: "SEO builds over time and depends on your site and market, so we don’t promise fixed results. We explain what to expect after reviewing your site." },
    ],
    proof: { quote: "We ran into several stumbling blocks, but they worked right through them. They were very patient, knowledgeable, and professional.", name: "Lisa D.", country: "United States", source: "Fiverr" },
  },
  "paid-ads": {
    slug: "paid-ads",
    name: "Paid Ads",
    title: "Run ads with a clear plan and clear reporting.",
    titleAccent: "a clear plan",
    intro: "We help plan, set up, and improve Google and Meta campaigns so you can understand what is being tested and where your budget goes.",
    visual: "ads",
    helpWith: ["Campaign setup", "Ad copy and creative testing", "Landing page alignment", "Tracking and reporting"],
    included: ["Google and Meta campaign setup/management as agreed", "Creative tests", "Tracking", "Reporting"],
    faq: [
      { q: "Which platforms do you manage?", a: "Google Ads and Meta Ads." },
      { q: "Who pays the ad spend?", a: "Ad spend is separate from our fee. We confirm how billing works for your account during the audit call." },
      { q: "What budget is appropriate?", a: "It depends on your goals and market. We recommend a budget case by case after reviewing your situation." },
    ],
    proof: { quote: "I’ve been using their services for our business for four times now, and I’m always blown away by the results.", name: "Repeat Client (4th Project)", country: "United States", source: null },
  },
  automations: {
    slug: "automations",
    name: "Automations",
    title: "Connect your tools and cut repeat admin.",
    titleAccent: "cut repeat admin",
    intro: "We connect forms, CRMs, and communication tools to help your team handle leads and routine tasks with fewer manual steps.",
    visual: "automation",
    helpWith: ["Manual data entry", "Slow lead routing", "Tools that do not share information"],
    included: ["Workflow review", "Zapier/Make or custom integrations as suitable", "Notifications and routing", "Handover documentation"],
    faq: [
      { q: "Which tools can you connect?", a: "Forms, CRMs, and communication tools, using Zapier, Make, or custom integrations where suitable." },
      { q: "What happens if a workflow fails?", a: "We set up notifications so issues are flagged, and the handover documentation explains how each workflow runs." },
      { q: "Can workflows be changed later?", a: "Yes. Workflows can be adjusted as your process changes." },
    ],
    proof: { quote: "Jawad and his team are awesome! We had some custom coding and integrations we needed done and they came through.", name: "C. Davis", country: "United States", source: "Fiverr" },
  },
};

export const serviceList = Object.values(services);
