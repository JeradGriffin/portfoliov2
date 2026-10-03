# Atlas rebuild — install

From the `New Portfolio` folder (where `package.json` is):

```bash
git restore . && git clean -fd src      # undo the earlier attempts
cp -R atlas-11ty/ ./                     # copy this package into the repo
npx @11ty/eleventy --serve               # preview at localhost:8080
```

## What this changes
Overwrites: `eleventy.config.js` (one passthrough line added), `src/_includes/base.webc`,
`src/index.webc`, `src/src.11tydata.js`.

Adds:
- `src/_data/site.js` — all home-page copy (bio, clients, links, form)
- `src/_data/projects.js` — the six projects; drives the work list AND the case studies
- `src/_components/fn-atlas-*.webc` — spine, opener, work, about, clients, contact
- `src/work/project.webc` + `work.11tydata.js` — one template → `/work/<slug>/` pages
- `src/assets/atlas/` — the design CSS and the small script

Your old `fn-site-*` components, `theme.css`, `screen.css`, `mnml.css` are left in place
but no longer used. `src/pages/fn-site-portfolio-page.html` is no longer linked; delete it
once you're happy.

## Kept working
- Contact form posts to Formspree (`mblznrrz`) with the same field names.
- LinkedIn / GitHub links.
- Click-to-enlarge on case-study images (desktop), like the old detail page.

## To edit later
- Copy: `src/_data/site.js`
- A project: `src/_data/projects.js` (add `year: "2024"` to show a year)
