# Personal Website

Welcome to my personal website. I wanted it to be simple and straight to the point.
You will find different pages: intro (about section), travels (an interactive map with all my travels) and news (with all my different news from different platforms).

## Tech Stack

**Frontend:** NextJS with TypeScript, TailwindCSS

**Database + Storage:** Supabase

**External:** Mapbox (interactive map)

## Lessons

When using different themes (dark and light), I discovered that Mapbox didn't keep my "no fog" demand for the render and if you do it few times will either but a wite or black background instead of no background. You will find a way to fix that in the travels/page.tsx (rerendering it every time the theme changes).
