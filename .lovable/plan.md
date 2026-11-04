# Real work screenshots for the service visuals

Swap the grey sketch visuals, both on the homepage services section and at the top of each service page, for screenshots of your real work in clean, minimal frames. The small numbers keep the current brand gradient.

## Frames per service
- **Web Design:** a desktop browser frame with a phone frame overlapping its corner, showing one real site you built.
- **SEO:** a single browser frame showing a real Search Console or ranking report, cropped tight.
- **Paid Ads:** a single frame showing a real Google or Meta Ads dashboard.
- **Automation:** a single frame showing a real Zapier or Make workflow.

## Frame style
- A thin hairline border, a softly rounded corner, a three-dot browser bar in the site's stone color, and a very soft shadow.
- No mockup gadgets, no gloss and no tilt, so it stays editorial and minimal.
- Screenshots fill the frame neatly and load quickly.
- A small caption under each one, e.g. "Client project", in the same small muted style used across the site.

## What I need from you
- 1 desktop and 1 mobile screenshot of a website you built.
- 1 SEO results screenshot.
- 1 ads dashboard screenshot.
- 1 automation workflow screenshot.
- Blur or crop out any client names or numbers you can't show publicly.

Until you send them, the frames show a neat empty placeholder. You'll only need to upload the screenshots in chat and I'll drop them in.

## Technical details
- Add a new `ServiceShowcase` in the shared site blocks, used by both the homepage accordion and `ServicePage`. It replaces `ServiceVisual`.
- Add an optional `screenshots` field to the service data in `site-content.ts`.
- Upload images through Lovable Assets and reference them by their `.asset.json` pointers. Use `<img loading="lazy">` with `object-fit: cover` and a top alignment.
- Style everything with new plain CSS classes in `src/styles.css`, using the existing line, stone and radius tokens. Responsive: on mobile the phone frame stacks below the browser frame.
