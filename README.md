# Paramveer Rana · Portfolio

Notion-style portfolio built with Next.js (App Router) and TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `src/app/` | `layout.tsx`, `page.tsx` (page composition), `globals.css` (all styling) |
| `src/components/` | One component per section: `TopBar`, `Cover`, `Hero`, `Academics`, `DailyQuote`, `About`, `GithubGraph`, `Socials`, `ClockCard`, `Projects`, `Contact`, `Footer` |
| `src/components/Skills/` | `Keyboard3D` (three.js), `InfoPanel`, `SkillsSection`, `SkillIcon` |
| `src/data/` | Content: `site.ts` (name, links), `quotes.ts`, `projects.ts`, `skills.ts`, `contributions.ts` |
| `public/assets/images/` | `banner.gif`, `tom.jpg`, `me.png`, `cu-logo.png`, `forest.png` |
| `public/assets/pixel/` | Pixel art: hanging plant, cat, pot, BMO, Pikachu, planet |

## Things to change

- **Your photo:** replace `public/assets/images/me.png` (square image, shown as a circle).
- **Email / links:** `src/data/site.ts`. The email is a placeholder.
- **Projects:** `src/data/projects.ts`.
- **Quotes:** `src/data/quotes.ts`. The quote is picked by date, so it changes daily at local midnight.
- **GitHub graph:** `src/data/contributions.ts` is a snapshot of github.com/phoenix-91. Replace it to refresh.
- **New asset:** drop the file in `public/assets/...` and add its size to `src/data/assets.ts`.

The 3D keyboard uses `three@0.128.0` (pinned so the look matches the original).
