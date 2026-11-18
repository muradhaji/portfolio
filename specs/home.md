# Home Page

## Goal

Introduce Murad Hajiyev as a Front-End Developer: who he is, what he knows, what he offers and what he has built, with a clear way to get in touch.

## Behavior

### General

- **HOME-1** The home page shows, in order: Intro, About Me, My Skills, My Services, My Projects. [test]
- **HOME-2** The page has one `<h1>` (the name in the intro); section titles are `<h2>`. [test]
- **HOME-3** Sections fade or slide in when they scroll into view, and animate again when they come back into view. [manual]
- **HOME-4** All text content (about text, counters, education, work history, services, skills, social links) comes from `src/helpers/constants.js`. [test]

### Intro

- **INTRO-1** Shows "Hi!", the name "I'm Murad Hajiyev" as the page heading, the title "Front-End Developer" and a one-line summary. [test]
- **INTRO-2** Has buttons "Read more about me" (scrolls to About) and "View projects" (scrolls to My Projects). [test]
- **INTRO-3** Shows social icon links for LinkedIn, Telegram, Email, GitHub and LeetCode. [test]

### About Me

- **ABOUT-1** Shows one paragraph per `ABOUT_ITEMS` entry, each with its icon. [test]
- **ABOUT-2** Shows one counter per `COUNTERS` entry; the number counts up when scrolled into view and is followed by its suffix (for example `3+`). [test]
- **ABOUT-3** Shows an Education list (`EDUCATION`) and a Work Experience list (`EXPERIENCE`); each entry shows its name, role and date range separated by an en dash. Missing dates are hidden, not replaced by placeholder text. [test]

### My Skills

- **SKILLS-1** Shows a slider with one slide per `MY_SKILLS` group; each slide lists that group's skills. [test]
- **SKILLS-2** The slider plays automatically and stops once the visitor interacts with it. [manual]
- **SKILLS-3** Below the slider, dots show the current group's name and up to two neighbors on each side. Dots are buttons labelled "Show <group> slide"; the current one is marked `aria-current`. Pressing a dot (click or keyboard) shows that slide. [manual]
- **SKILLS-4** Shows the avatar (alt text "Murad Hajiyev"), a "Download CV" button and social icon links for LinkedIn, WhatsApp, Telegram and Email. [test]
- **SKILLS-5** "Download CV" downloads `/resume.pdf` as `Murad Hajiyev - CV (Front-End Developer).pdf`. [test]
- **SKILLS-6** The avatar shows in its original colors, with no grayscale or other color filter, in both light and dark theme. [manual]

### My Services

- **SERVICES-1** Shows one block per `SERVICES` entry with its title (`<h3>`) and description. [test]
- **SERVICES-2** Each block has a picture made of screens from the entry's `screens` (text or icon); pictures alternate between left and right. [manual]

### My Projects

- **HOMEPROJECTS-1** Shows the projects grid in compact mode (see `projects.md`). [test]

## Out of scope

- A contact form.
