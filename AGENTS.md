<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site styling lives in plain CSS classes in src/styles.css (ported from the original Automax static site); reuse those classes instead of Tailwind utilities so all pages stay visually consistent.
- Shared copy (reviews, service data, email) lives in src/lib/site-content.ts; pages read from it so wording stays identical everywhere.
- Service headline emphasis is declared in shared service data and rendered without changing the title text, so styling cannot alter supplied copy.
- SiteButton is the shared button primitive for new site controls; Services navigation uses Radix DropdownMenu for accessible keyboard and dismissal behavior.
