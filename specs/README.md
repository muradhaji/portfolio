# Specs

Specs describe what the site does. Code and tests follow the specs, not the other way around.

## Two kinds of change

- **Data change** (new project, job, text, link, counter): no spec. Edit only the data files (`src/helpers/constants.js`, `public/projects/projects.json`). If the request needs a code change, say so first.
- **Feature or behavior change**: write or update the spec first, get it approved, then implement, then verify every behavior in it.

## Workflow for a feature or behavior change

1. Draft the change in the relevant spec (or a new spec from the template below). Mark new or changed behaviors with `(proposed)`.
2. Review: the owner approves or edits the spec. Open questions must be answered before coding.
3. Implement against the spec. Remove `(proposed)` once a behavior is implemented.
4. Verify: every behavior has an automated test or is checked in the browser, as its tag says.
5. Run `npm run check` (format, lint, tests, build) before committing.

## Writing behaviors

- One checkable statement per line, with an ID: `- **THEME-3** Clicking the theme button saves the choice. [test]`
- IDs never change meaning. A removed behavior keeps its ID marked `(removed)` so old references stay clear.
- Tags say how a behavior is verified:
  - `[test]`: covered by a test in `src/__tests__/`. The test name starts with the ID.
  - `[manual]`: visual or browser-only (hover, animation, layout); checked in the browser on every related change.

## Specs

| Spec                                         | Covers                                                       |
| -------------------------------------------- | ------------------------------------------------------------ |
| [layout-navigation.md](layout-navigation.md) | Page layout, header, mobile menu, section links, footer      |
| [theme.md](theme.md)                         | Light and dark theme                                         |
| [home.md](home.md)                           | Home page sections: intro, about, skills, services, projects |
| [projects.md](projects.md)                   | Project data, projects grid, project cards, projects page    |
| [project-details.md](project-details.md)     | Project details page                                         |

## Template

```md
# <Feature name>

## Goal

<One or two sentences: why this exists.>

## Behavior

- **<PREFIX>-1** <Checkable statement.> [test|manual]

## Out of scope

- <What this does not do.>

## Open questions

- <Question for the owner. Remove once answered.>
```
