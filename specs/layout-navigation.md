# Layout and Navigation

## Goal

Every page shares the same frame (header, content, footer), and every section of the site is reachable in one click on desktop and on phones.

## Behavior

### Layout

- **LAYOUT-1** Every route renders the header, the page content and the footer. [test]
- **LAYOUT-2** On pages shorter than the screen, the footer sits at the bottom of the window. [manual]
- **LAYOUT-3** Routes: `/` (home), `/projects` (all projects), `/projects/details/:id` (project details). [test]

### Header

- **NAV-1** The header shows the `Mh` logo linking to `/`. [test]
- **NAV-2** At 600px and wider, the header shows links About, Skills, Services (sections on the home page) and Projects (`/projects`). [test]
- **NAV-3** Section links scroll smoothly to the section, also when clicked from another page. [manual]
- **NAV-4** The header has a theme button (see `theme.md`). [test]
- **NAV-5** Below 600px, the header links are hidden and a menu button labelled "Open menu" is shown. [manual]

### Mobile menu

- **MENU-1** The menu button opens a full-screen menu that replaces the page. [test]
- **MENU-2** The menu lists Home, About, Skills, Services and Projects. [test]
- **MENU-3** The menu closes when a link is clicked or when the close button ("Close menu") is pressed. [test]
- **MENU-4** The menu closes automatically when the window becomes wider than 600px. [test]

### Scrolling

- **SCROLL-1** Opening a URL with a section hash (for example `/#skills`) scrolls to that section once the page has rendered. [test]
- **SCROLL-2** Navigating to `/` or `/projects` without a hash scrolls to the top. [test]

### Footer

- **FOOTER-1** The footer shows `© 2024–<current year> | Murad Hajiyev` as plain text (not a link). [test]
- **FOOTER-2** The footer shows an icon link for every entry in `SOCIAL_LINKS`, each with an accessible name (LinkedIn, WhatsApp, …). [test]
- **FOOTER-3** External social links open in a new tab with `rel="noopener noreferrer"`; the email link opens in the same tab. [test]
- **FOOTER-4** At 600px and wider, the copyright is on the left and the icons on the right; the last icon lines up with the content's right edge. Below 600px both are centered and stacked. [manual]

### Not found

- **NOTFOUND-1** Any URL that matches no route (for example `/foo`), and any unknown project id (DETAILS-6), shows a not-found page inside the normal layout, with header and footer. [test]
- **NOTFOUND-2** The not-found page has one `<h1>` "Page Not Found", the sentence "This page doesn't exist." and a "Go to home page" link to `/`. [test]
- **NOTFOUND-3** The URL stays as typed; there is no redirect. [test]
- **NOTFOUND-4** The page uses the same section header style as the other pages, sits between header and footer with the footer at the bottom of the window, and looks right at phone width and in light and dark theme. [manual]

## Out of scope

- A server-side 404 status code: the site is a single-page app, so the host always serves the page.
