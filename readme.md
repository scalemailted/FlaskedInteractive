# Flasked Interactive

![Flasked Interactive – screenshot](https://github.com/scalemailted/FlaskedInteractive/blob/main/docs/flasked_interctive.png)

*A tiny, scene-based space adventure built to showcase **HTML + CSS**, with just enough JavaScript to glue things together and persist state between pages.*

**Play:** https://scalemailted.github.io/FlaskedInteractive/  
**Code:** https://github.com/scalemailted/FlaskedInteractive


---

## What is it?

**Flasked Interactive** is a minimalist interactive-story game. Each “scene” is a plain HTML file styled as a retro **Control Panel**. You travel, explore hazards around a black hole, and decide whether to confront the anomaly or escape.

The game tracks lightweight stats—**HP** and **AP**—and passes them from page to page via the **URL query string**. A tiny Inventory panel reads those values and shows your current state. No backend, no build step.

---

## Design philosophy

- **Minimal JavaScript:** only small, page-local scripts for navigation and reading/writing query-string state.
- **Framework-free:** no React, no bundlers—just static HTML/CSS/JS to keep concepts transparent.
- **HTML/CSS-first UI:** all scenes are standalone HTML documents; layout/feel is driven by CSS.
- **Simple, inspectable state:** game state lives in the URL (e.g., `?hp=3&ap=1`) and flows through links.
- **Teaching-friendly:** great for demonstrating DOM basics, navigation, query strings, and incremental interactivity.

---

## Quick start

1. Open the live link and read the message on the **Control Panel** home screen.
2. Click **Travel** to prepare—**Load Weapon** or **Rest**.
3. When you **Arrive**, choose a destination: **Event Horizon**, **Accretion Disk**, or **Singularity**.
4. Make choices carefully; some paths lead to victory, others to… less ideal outcomes.

---

## How to play

- **Click the on-screen buttons** to move between scenes and make choices.  
- **Watch your stats.** The Inventory reads `hp` and `ap` from the URL (example: `...?hp=3&ap=2`).  
- **Prepare before the fight.** Use **Travel** to raise AP or advance time.  
- **Explore carefully.**
  - **Accretion Disk:** “Dive into the suspicious liquid!” (risk/reward).
  - **Event Horizon → AI Being:** observe or engage.
  - **Singularity:** attack with enough AP—or risk opening something worse.
  - **Escape:** punch it to lightspeed and live to tell the tale.

---

## How it works (under the hood)

- **State:** Stats are carried as a query string: `scene.html?hp=3&ap=1`.
- **Navigation:** Buttons link to the next scene while preserving the current query string.
- **Inventory:** An `<iframe>` loads `inventory.html` with the same query, so the panel always reflects current HP/AP.
- **No storage:** No cookies or LocalStorage required (easy to extend later if you want save slots).

---

## File map (scenes)

- `index.html` – Home screen / Control Panel (start here)  
- `travel.html` – En-route actions (**Load Weapon**, **Rest**)  
- `arrived.html` – Choose **Event Horizon**, **Accretion Disk**, or **Singularity**  
- `eventhorizon.html` – Approach the flashing boundary  
- `aibeing.html` – Encounter with a mysterious entity  
- `accretiondisk.html` – Risky purple-liquid choice  
- `singularity.html` – Final confrontation  
- `escape.html` – Lightspeed getaway; optional look-back  
- `inventory.html` – Small iframe that renders `hp`/`ap` from the URL  
- `explosion.html` – **Victory** outcome (status OK, destination EARTH)  
- `end.html` – **Game Over** outcome (replay link)

---

**Repo layout**

```
docs/            # screenshots, promo image (e.g., docs/castle_maven.png)
game/            # all scene HTML, assets/, styles/, scripts/
index.html       # redirect or landing page to /game/index.html (optional)
readme.md
```

---


