# Copilot / AI Agent Instructions for this repository

Summary
- This is a static site built with Eleventy (11ty) and WebC components. The site source lives in `src/` and the generated site is written to `_site/`.

Big picture
- Build system: `npm run build` runs `npx -y @11ty/eleventy` (see `package.json`).
- Local dev: `npm run serve` runs Eleventy with `--serve --incremental` for fast feedback. There's a VS Code task named "Run 11ty server" that runs this command.
- Components: WebC components are placed under `src/_components/**/*.webc` (configured in `eleventy.config.js`). Pages (entry points) live under `src/` (for example `src/index.webc`).
- Templates/data: global page defaults live in `src/src.11tydata.js` (default `layout: "base"`).

Important files to inspect
- `eleventy.config.js` — plugin registration (`@11ty/eleventy-plugin-webc`), JS helper functions (`renderTitle`, `renderSocialImage`) and Eleventy `dir.input: "src"`.
- `package.json` — scripts: `build` and `serve`; dev deps: `@11ty/eleventy`, `@11ty/eleventy-plugin-webc`; runtime dep: `@11ty/eleventy-img`.
- `src/index.webc` — example page that composes WebC components such as `<fn-site-hero>` and `<fn-site-portfolio>`.
- `src/_components/` — where component implementations are located (use this glob when searching).

Project-specific conventions
- WebC component prefix: components for the site use names like `fn-site-*` (see `src/index.webc` usage). Search `src/_components` for implementations.
- Data/layout defaults: the repository sets default layout via `src/src.11tydata.js` — treat this as the base layout for pages unless overridden.
- `renderSocialImage` normalizes relative image paths to the production domain `https://www.griffindesdev.com` inside `eleventy.config.js`. When authoring pages, prefer relative paths for images that should resolve on production.
- Assets: built site includes a `bundle/` directory of hashed CSS/JS assets in the generated `_site/`. Don't hardcode bundle filenames — reference assets via templates or Eleventy helpers where available.

Developer workflows (quick commands)
- Local dev with live reload: `npm run serve` (or run the VS Code task "Run 11ty server").
- Build for production output: `npm run build` which produces `_site/`.
- Tests: none are present; `npm test` prints a placeholder.

How to be helpful when editing code
- When modifying or adding WebC components, place files under `src/_components` and reference them from pages in `src/`.
- For page metadata and layout changes, check `src/src.11tydata.js` for defaults and `eleventy.config.js` for helper functions.
- If introducing new server-side JS helpers, register them in `eleventy.config.js` using `eleventyConfig.addJavaScriptFunction(...)` so templates can call them.

External integrations & gotchas
- Images: repository includes `@11ty/eleventy-img` in `dependencies`. Image generation/optimization may be used elsewhere; search for usages before changing image markup.
- Absolute production URLs: `renderSocialImage` assumes `https://www.griffindesdev.com` — previews served locally may point to production-hosted assets.
- Node ESM: `package.json` sets `type: "module"`. Use ESM import/export syntax in config and scripts.

If you edit this file
- Merge any relevant guidance here rather than duplicating it. If you find other agent docs (e.g., `AGENT.md`), add a short summary and a link.

Questions for the repo owner
- Are there any undocumented build steps or deployment hooks (CI, Netlify/Cloudflare/Azure) that should be referenced here?
- Are there component naming rules beyond the `fn-site-` prefix that agents should follow?

End of instructions.
