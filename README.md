# Wise Choice – Question Bank & Test Portal

An offline-ready quiz / mock-test web app (PWA). No frameworks, no build step.

## Files
| File | What it is | Do you edit it? |
|---|---|---|
| `data.js` | **All your questions**, grouped by Subject → Category → Sub-topic | **Yes – this is the only file you need** |
| `index.html`, `style.css`, `app.js` | The app itself | No |
| `manifest.json`, `sw.js`, `icons/` | Makes it installable & offline | No |

## Adding a question
Open `data.js`, find the block for the topic (e.g. `GEO-LAK` = Lakes), and add a line at the **end** of that block:

```js
["Which lake is in Manipur?", ["Dal", "Loktak", "Chilika", "Wular"], 1, "Loktak is in Manipur."],
```
The number after the options is the right answer: `0` = 1st option, `1` = 2nd, `2` = 3rd, `3` = 4th.

## Adding a new topic
Copy any whole block (`addSection( … ]);`) to the bottom of `data.js` and change `code`, `subject`, `category`, `subtopic`. It appears in the app automatically (home page list and Settings filters).

If you make a typo, a red message on the home page tells you which question to fix.

## Publish free on GitHub Pages
1. Create a GitHub account → **New repository** (public), e.g. `wise-choice`.
2. Click **Add file → Upload files**, upload *everything* from this folder (keep the `icons` folder), then **Commit**.
3. Go to **Settings → Pages → Branch: main / (root) → Save**.
4. After a minute your site is live at `https://YOUR-NAME.github.io/wise-choice/`.
5. Open it on your phone → browser menu → **Install app / Add to Home screen**.

After editing `data.js` on GitHub, reload the site **twice** (the first reload fetches the update, the second shows it). To force an instant refresh for everyone, change `wise-choice-v1` to `v2` in `sw.js`.
