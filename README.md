# Wise Choice Study Hub: WBCS Prelims PYQs

Plain HTML, CSS and JavaScript. No build step and no server code.

```
index.html, style.css, app.js     the app
sw.js, manifest.webmanifest       offline support and "install app"
icons/                            logo and app icons
fonts/                            local fonts (see "Fonts" below)
tools/self-host-fonts.py          one-time font downloader
data/manifest.js                  list of papers and Static GK sub-topics
data/sample.js                    sample PYQ paper (remove once real papers are added)
data/static-gk/<sub-topic>/set-NN.js   Static GK sets, up to 100 questions each
```

## Run it
Install and offline mode need `https://` or `http://localhost`; opening index.html straight from a folder still works but without those two.
For a quick local server: `npx serve .` or `python3 -m http.server 8000`, then open http://localhost:8000.
Free hosting that gives you https: GitHub Pages, Netlify, Cloudflare Pages.

## Add questions
- **PYQ paper:** create `data/<name>.js` calling `registerPYQ(...)`, then list `"<name>"` in `PYQ_YEARS` in `data/manifest.js`.
- **Static GK set:** see `data/static-gk/README.md`. Raise `sets:` for the sub-topic in `data/manifest.js`.

## After you change any file
Open `sw.js` and change `VERSION` (for example `wcsh-v2`). Installed copies then refresh and show "App updated".
New question files are picked up automatically the next time the app is opened online.

## Fonts
The app loads Manrope, Newsreader and the Bengali fonts from Google Fonts. The service worker caches them after the first online visit, so they also work offline.
To host them yourself, run `python3 tools/self-host-fonts.py` once on a computer with internet, then bump `VERSION` in `sw.js`.

## Storage
Progress lives in the browser (localStorage, about 5 MB). Attempts store only the option order, not the option text, which keeps them small.
History shows how much is used; use Export backup before clearing anything.
