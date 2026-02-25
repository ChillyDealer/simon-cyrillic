# Simon Cyrillic — Transliteration Quiz

A React + TypeScript web app that quizzes you on converting Cyrillic letters to Latin transliteration.

🔗 **Live demo:** https://ChillyDealer.github.io/simon-cyrillic/

## Features

- Displays a Russian word in Cyrillic script
- You type the Latin transliteration and press Enter (or click Submit)
- ✅ Green flash for correct answers, ❌ red + correct answer shown for wrong ones
- Auto-advances after a correct answer
- Score tracker and word progress indicator
- Randomised word order every round
- Restart button

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`), then pushes the `dist/` folder to the `gh-pages` branch.

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [gh-pages](https://github.com/tschaub/gh-pages)

## Transliteration Map

Uses a standard Russian → Latin mapping (BGN/PCGN-inspired):

| Cyrillic | Latin |
|----------|-------|
| а | a |
| б | b |
| в | v |
| г | g |
| д | d |
| е | e |
| ё | yo |
| ж | zh |
| з | z |
| и | i |
| й | y |
| к | k |
| л | l |
| м | m |
| н | n |
| о | o |
| п | p |
| р | r |
| с | s |
| т | t |
| у | u |
| ф | f |
| х | kh |
| ц | ts |
| ч | ch |
| ш | sh |
| щ | shch |
| ъ | (omitted) |
| ы | y |
| ь | (omitted) |
| э | e |
| ю | yu |
| я | ya |
