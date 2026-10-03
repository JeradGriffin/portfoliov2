# Atlas Redesign — Changelog

## Session: 2026-10-03

### Reset & clean slate
- Hard reset `atlas-redesign` branch to `fa6bada` (before the previous failed redesign attempt)
- `git clean -fd src` to remove untracked files
- Copied the `atlas-11ty/` package into the repo using the instructions in `README-ATLAS.md`

### Files copied in
```
atlas-redesign-files/fn-site-*.webc    → src/_components/
atlas-redesign-files/fn-site-portfolio-page.html → src/pages/
atlas-redesign-files/atlas-dark.css    → src/_includes/
atlas-redesign-files/jeerad.png        → src/portfolio/images/ (no-overwrite)
```

### CSS tokenization (`atlas-home.css` + `atlas-case.css`)
Replaced hardcoded values with CSS custom properties. New tokens added to `:root`:

| Token | Value | Used for |
|---|---|---|
| `--pad` | `28px` | Section-level internal padding |
| `--col-gap` | `64px` | Two-column content gaps |
| `--band` | `96px` / `92px` | Between-section vertical spacing |
| `--overlay` | `rgba(10,10,8,0.94)` | Lightbox backdrop |
| `--grain` | `rgba(22,21,20,0.018)` | Body grain texture |

Existing tokens already in use: `--paper`, `--ink`, `--ink-2/3/4`, `--signal`, `--rule`, `--rule-soft`, `--sans`, `--display`, `--serif`, `--mono`, `--spine`, `--gutter`.

`.page` padding changed from hardcoded `56px` to `var(--gutter)`. Body grain and lightbox overlay `rgba()` values replaced with `var(--grain)` and `var(--overlay)`. Repeated `28px`, `64px`, `96px` spacing values replaced with `var(--pad)`, `var(--col-gap)`, `var(--band)`.

### Font size changes
1. All `font-size: 12px` → `14px`
2. All `font-size: 10px` and `11px` → `12px` (minimum floor)
3. All `font-size` px values converted to rem (base 16px):

| px | rem |
|---|---|
| 12 | 0.75rem |
| 13 | 0.8125rem |
| 14 | 0.875rem |
| 16 | 1rem |
| 17 | 1.0625rem |
| 18 | 1.125rem |
| 19 | 1.1875rem |
| 20 | 1.25rem |
| 22 | 1.375rem |
| 26 | 1.625rem |
| 28 | 1.75rem |
| 30 | 1.875rem |
| 40 | 2.5rem |
| 52 | 3.25rem |
| 64 | 4rem |
| 84 | 5.25rem |
| 96 | 6rem |

Responsive breakpoint overrides and one-off layout px values left as-is.

### Commits
- `41b4cfc` — Atlas redesign: new component architecture and build
- `24c9bc0` — Atlas CSS: tokenize values, bump small font sizes to rem
