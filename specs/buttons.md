# Buttons

## Goal

Give the site's buttons a hover effect that feels alive: the border draws itself around the button like a loading ring instead of just changing color.

## Behavior

- **BUTTON-1** Every button built from the `Button` component ("Read more about me", "View projects", "Download CV", "View all" and the not-found page link) has a thin rounded border in its resting color, as today: white in light theme, black in dark theme. It is 2px wide, and 3px from 600px wide up. [manual]
- **BUTTON-2** Hovering a button, or focusing it with the keyboard, draws the border in the hover color (black in light theme, white in dark theme) clockwise around the button, starting at the top center, from 0° to 360° over 0.6s with an ease-out curve: it draws fast at first and slows as it closes. At the end the full border shows in the hover color, as today's hover. The button keeps its size and nothing around it moves. [manual]
- **BUTTON-3** Leaving the button un-draws the hover border counter-clockwise back to the top center with the same duration and curve. Leaving mid-draw reverses from where it is. [manual]
- **BUTTON-4** With "reduce motion" turned on, the hover border appears and disappears at once, without drawing. [manual]

## Out of scope

- Other clickable controls (theme and menu buttons, slider dots, social icons, project cards).
- Changing button colors, sizes or text.
