# Minglecade

**Come for the games. Stay for the people.**

A curated, mobile-friendly directory of original independent games, shared music experiences, and bite-sized fun. The hub **does not host or embed the games**: every Play Now link opens the original application in a new tab.

## Stack
Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React, deployed on Vercel. No auth, database or backend API required.

## Run
```bash
npm install
npm run dev
npm run build
npm test
```

## Add an experience
Edit `src/data/games.ts`: add a game with a unique slug, accurate category, mode, player count, original deployment URL, and optional screenshot. The catalog, detail page, and sitemap update automatically. Use screenshots you have rights to show. `optional: true` hides the game until visitors enable experimental games.

## Notes
- Some games are **solo** and are marked that way; the site does not imply universal multiplayer support.
- Online game availability, YouTube/music sources, and remote multiplayer vary by the original app; verify before promotion.
- Real screenshots are used where already available; other games get clearly stylized title art until screenshots can be captured.
- No credentials, API keys, or cross-project infrastructure are required.
- Brand name and copy are intentionally easy to change.