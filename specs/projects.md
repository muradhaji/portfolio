# Projects

## Goal

Show finished projects attractively, keep space for upcoming ones, and never promise projects that don't exist.

## Behavior

### Data

- **PDATA-1** Projects come from `public/projects/projects.json`, which holds only real projects, loaded once per visit and shared between pages. [test]
- **PDATA-2** Projects are shown sorted by their `order` field. [test]
- **PDATA-3** Placeholders for upcoming projects are not data: the grid adds placeholder cards after the real projects until there are 8 cards (slot count and covers in `PROJECT_PLACEHOLDERS` in `src/helpers/constants.js`). Adding a real project replaces a placeholder; with 8 or more real projects there are none. [test]
- **PDATA-4** If loading fails, the grid shows "Could not load projects." and a later visit to a projects view tries again. [test]

### Grid

- **GRID-1** While loading, the grid shows a skeleton. [test]
- **GRID-2** Projects are laid out in columns (masonry). Column count by window width: under 768px: 2; 768–1023px: 3; 1024px and wider: 4. [test]
- **GRID-3** Card shapes alternate (horizontal / vertical cover) per column so neighboring cards differ. [manual]
- **GRID-4** Cards fade in one after another, ordered by `order`. [manual]

### Compact grid (home page)

- **COMPACT-1** Shows at most two rows (column count × 2 projects). [test]
- **COMPACT-2** Below the grid, counts only real (non-placeholder) projects that are not shown: "There is 1 more project." / "There are N more projects." with a "View all" button to `/projects`. [test]
- **COMPACT-3** If no real projects are hidden, shows "Check back soon for new projects!" and no button. [test]

### Project card

- **CARD-1** A real project card is a link to `/projects/details/<id>` that opens in the same tab. [test]
- **CARD-2** A placeholder card is not a link. [test]
- **CARD-3** Cover alt text is "<name> cover" for real projects and "Upcoming project" for placeholders. [test]
- **CARD-4** Hovering any card zooms the cover image. [manual]
- **CARD-5** Hovering a real project card also shows a dark overlay with the project name and an eye icon; placeholder cards show no overlay. [manual]

### Projects page

- **PPAGE-1** `/projects` shows the heading "All Projects" (`<h1>`) and the full grid with every project. [test]

## Out of scope

- Filtering or searching projects.
