# Alumni Stories — Experiential Prototype

Interactive comic-style alumni journeys with reflection questions and a summary of the user's choices.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Flow

1. **Home** — Pick Rafaela or Jordan Okafor
2. **Story** — Tap through comic panels (images + video)
3. **Reflection** — Answer prompts at key moments
4. **Summary** — Review your choices; note about the full live experience

No backend required; all content is static data in `src/data/alumni.js`.

## Stack

- **JavaScript (ES modules)** + **JSX**
- **React 18** + **React Router**
- **Vite** (dev server and build)
- **CSS** (custom styles)
