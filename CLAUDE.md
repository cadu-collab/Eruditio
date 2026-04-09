# Eruditio

Static web app that generates intelligent insults disguised as compliments.
Deployed via GitHub → Vercel. No build step — plain HTML/CSS/JS.

## Stack & Constraints

- No bundler, no npm, no TypeScript. Vanilla JS (ES6+), plain CSS, one HTML file.
- Google Fonts loaded via CDN in `index.html` (Playfair Display, Inter).
- `vercel.json` sets `cleanUrls: true` and `trailingSlash: false` — keep it that way.
- The `api/` directory is reserved for Vercel serverless functions. Do not add anything there until Phase 2.

## Project Structure

```
index.html          ← single page, all markup lives here
src/css/style.css   ← all styles, one file
src/js/main.js      ← all JS — insults data + logic
api/                ← empty; future serverless functions (Phase 2+)
public/images/      ← mascot and static assets go here
public/fonts/
vercel.json
```

## Design System

Palette is **monochromatic** — warm brown-black family only, no accent color.
CSS custom properties defined in `:root` of `style.css`:

| Token            | Value     | Usage                                      |
|------------------|-----------|--------------------------------------------|
| `--bg`           | `#EEEAE6` | Page background (warm parchment)           |
| `--surface`      | `#F7F3EE` | Cards, control panels                      |
| `--surface-2`    | `#E8E3DB` | Inputs, inactive buttons                   |
| `--border`       | `#D4CEC7` | All borders and dividers                   |
| `--primary`      | `#332E29` | Buttons, active states                     |
| `--primary-hover`| `#201C17` | Button hover                               |
| `--text`         | `#332E29` | Primary text                               |
| `--text-muted`   | `#797571` | Labels, secondary text, footer             |

Always use these tokens — never hardcode hex values in new CSS.
Typography: Playfair Display for headings and output text; Inter for everything else.
Inspiration references: land-book.com "Current — A River of Reading" (warm palette) + "Shape Shift" (typographic restraint).

## Mascot

**Pudu** — a small South American deer, chosen for its unassuming appearance and ironic contrast with the site's sharp content.
Style: flat minimal line-art, deadpan expression, possibly a small bow tie or glasses. One color (matches `--primary`).
Status: illustration pending (user will sketch on paper → vectorize).
Placement TBD — likely logo area or empty state.

## Insult Data Schema (`src/js/main.js`)

```js
{
  text: string,
  relationship: Array<"general"|"coworker"|"boss"|"friend"|"ex">,
  occasion:     Array<"general"|"meeting"|"party"|"text">,
  tone:         1 | 2 | 3   // 1=Subtle  2=Sharp  3=Savage
}
```

`"general"` in `relationship` or `occasion` is a wildcard — matches any selector value.

## Key Logic: `pickInsult()`

Located in `src/js/main.js`. Flow:
1. Filter `insults[]` by all three dimensions (relationship, occasion, tone).
2. If no matches, fall back to tone-only filter.
3. Exclude `lastPickedIndex` to avoid repeating the last result when pool > 1.

**Phase 2 migration point:** `pickInsult()` is the single function to replace with an API call.
Callers: `showInsult()` → triggered by `generateBtn` and `anotherBtn` click handlers.
Return contract: an object with at least a `text` property.

## Roadmap

- **Phase 1 (current):** Hardcoded `insults[]` array in `main.js`.
- **Phase 2:** Replace `pickInsult()` with a call to a Vercel serverless function in `api/`
  that calls the Claude API. Input: `{ relationship, occasion, tone }`. Output: `{ text }`.
- **Phase 3:** User accounts + personalized generation history.

## Conventions

- No external JS dependencies. If a library feels necessary, question it first.
- All new CSS goes in `style.css`, following existing BEM-adjacent class naming.
- Keep `index.html` as the single HTML file — no multi-page routing.
- Responsive breakpoint: `620px` (bottom of `style.css`).
- When adding insults, maintain the `// Subtle / // Sharp / // Savage` section comments in `main.js`.

## Do Not

- Do not suggest converting to React, Vue, or any JS framework.
- Do not suggest adding npm, a bundler, or a build step.
- Do not introduce accent colors — the palette is intentionally monochromatic.
- Do not add new HTML files — this is a single-page app.
- Do not hardcode hex values in CSS — always use the token variables above.
