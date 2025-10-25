# Rayan Alamri – Personal Portfolio

This single-page portfolio is being developed for **SWE363 – Assignment 2**.
The goal is to demonstrate clean, accessible frontend engineering while documenting how AI assisted throughout the build.

---

## Overview

- **Responsive layout** tuned for mobile-first, tablet, and desktop breakpoints.
- **Semantic sections** covering About, Projects, Advice of the Day, and Contact.
- **Dark / light theming** with a circular animated toggle that remembers the visitor’s choice.
- **AI-assisted enhancements** including collapsible project cards, animated reveals, API integration, and inline validation.

---

## Key Features (2025-09-25 session)

- **Projects accordion** – Each project expands/collapses with smooth animation and ARIA updates.
- **Advice of the Day** – Fetches a quote from `https://api.adviceslip.com/advice`, shows loading / error states, and lets the user request a new tip.
- **Contact form UX** – Inline validation messages, highlighted errors, autocomplete hints, and animated success feedback.
- **Global polish**
  - Smooth scrolling that respects `prefers-reduced-motion`.
  - Section reveal animations and card hover effects.
  - Animated, circular theme toggle matching the reference design.
- **Accessibility** – Landmarks, focus treatment, descriptive alt text, persistent aria state, and localStorage-powered preferences.

---

## Getting Started

1. **Clone**
   ```bash
   git clone https://github.com/Rayan-Alamri/assignment-1.git
   cd assignment-1
   ```
2. **Open**
   - Double-click `index.html`, or
   - Use a Live Server / static web server for hot reload.
3. **Assets**
   - Replace `assets/images/placeHolder.jpg` with real screenshots when ready.

No extra build tools or dependencies are required.

---

## Technical Notes

- **HTML** – Semantic sections with `article` cards, hidden status messages, and reusable “reveal” class hooks.
- **CSS** – Custom properties (`--bg`, `--text`, spacing tokens) enable instant theming.
- **JavaScript**
  - Smooth scrolling and reveal observer
  - Advice API fetch with retry messaging
  - Accordion logic for project cards
  - Contact-form validation + animated status
  - Theme toggle persistence via `localStorage`

---

## AI Collaboration

ChatGPT helped:
- Prototype the collapsible Projects section, reveal animations, and advice API hook.
- Redesign the theme toggle animation.
- Strengthen client-side validation and error messaging.
- Draft and refine documentation (README + AI report).

I reviewed every suggestion, adapted the code, and tested behaviour in browser DevTools.
See [`docs/ai-usage-report.md`](docs/ai-usage-report.md) for a detailed log.

---

## License / Usage

This repository is for academic use. Feel free to reuse snippets for learning as long as attribution is maintained.
