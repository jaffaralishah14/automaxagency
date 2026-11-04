# Make "What we solve" (and "How we operate") feel premium

## Why it still looks generic
Each item sits in a bordered, rounded box with a big number. That box style is everywhere on template sites. The homepage "How it works" section looks more refined because it has no boxes. It uses open columns with thin dividing lines.

## What changes
- **No boxes:** take away the card borders, backgrounds and rounded corners.
- **Editorial columns:** the items sit side by side, split by thin vertical lines and capped by one hairline across the top, the same way the homepage process steps are laid out.
- **Refined numbering:** a smaller, lighter gradient number ("01") with a short gradient line next to it. The line works like an index mark and ties into the coral-to-magenta accent used across the site.
- **Title:** it sits a little below the number with tighter letter spacing and the same weight as the process-step titles, so the two sections read as one family.
- **Subtle hover (desktop only):** the short gradient line grows a bit wider. No lift, no shadow.
- **Mobile:** the items stack, with thin horizontal lines between them in place of the vertical ones, matching how the homepage process section stacks.
- Exactly the same treatment goes on the About page's "How we operate" cards, so the numbering looks the same everywhere.

The text doesn't change at all.

## Technical details
- `src/styles.css`: restyle `.solve-grid .line-card` (transparent background, no border/radius, a left border between columns, a top hairline on the grid), shrink `.solve-number` to about 15px tabular numbers with letter spacing, and add a `::after` gradient rule of about 28px that grows to 56px on hover. Add responsive rules for 4-column and stacked layouts.
- Check the About principles grid uses the same classes, and adjust its markup only if needed.
- Check with Playwright screenshots at desktop and 689px width.
