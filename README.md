# Isabela Arteaga — Portfolio

Personal portfolio site, published via GitHub Pages.

Live at: https://isabela256.github.io/portfolio-/ (once Pages is enabled — see below)

## Structure

- `index.html` — all content/sections
- `css/style.css` — styling, light/dark theme
- `js/script.js` — theme toggle + live "Recent GitHub Activity" pulled from the GitHub API

No build step — plain HTML/CSS/JS, so any edit to these files and a push updates the live site
automatically once GitHub Pages is enabled.

## Enabling GitHub Pages (one-time)

1. Go to this repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. The site will be live at `https://isabela256.github.io/portfolio-/` within a minute or two.

## Updating content

Edit the relevant section in `index.html` (project cards are under `#projects`, experience under
`#experience`, etc.) and push to `main` — the live site updates automatically, no build step
needed.
