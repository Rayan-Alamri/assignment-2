# AI Usage Report

**Course / Assignment:** SWE363 – Assignment 2 (Interactive Portfolio Enhancements)
**Student:** Rayan Alamri – 202247900
**Repo:** https://github.com/Rayan-Alamri/assignment-1
**Session Date:** 25/09/2025

---

## 1) Tools Used & Concrete Use Cases
- **ChatGPT (this session)**
  - Helped organise code by suggesting modular JS sections (accordion, advice fetch, theme toggle).
  - Assisted in refining validation logic for inline errors and status messaging.
  - Supported API integration with the Advice Slip service, including loading/error handling patterns.
  - Offered accessibility/performance suggestions (IntersectionObserver reveals, aria updates).
  - Collaborated on documentation drafts and structure.
- **VS Code + Live Server** – rapid preview while adjusting CSS animations and JS behaviour.
- **Chrome DevTools** – verified accessibility attributes, animation timing, network responses, and localStorage persistence.

---

## 2) Benefits & Challenges
**Benefits**
- Faster iteration on complex UI flows (accordion transitions, advice widget states) thanks to AI prompts.
- Validation guidance reduced trial-and-error for inline errors and aria messaging.
- Structured documentation support kept README/technical docs aligned with code.

**Challenges**
- Integrating AI snippets into the existing codebase required careful refactoring to maintain style consistency.
- Advice API caching had to be bypassed; solved by appending timestamps and disabling cache.
- Ensuring animations respected `prefers-reduced-motion` whenever new effects were added.

---

## 3) Understanding & Rationale
- **Accordion with animations:** Improves UX while maintaining accessibility through `aria-expanded` and `hidden` attributes; JS delays hiding until fade-out completes.
- **Advice API widget:** Shows loading text, success, and error states so users always know what’s happening.
- **Inline form validation:** Provides immediate feedback, keeps focus on the first invalid field, and animates success confirmation.
- **Theme toggle redesign:** Circular animation mirrors the provided design reference and visually confirms state changes.

---

## 4) Responsibilities & Collaboration
- **Student (Rayan):** Planned the overall architecture, implemented the HTML/CSS/JS, reviewed every AI snippet, adapted styling to match the brief, and tested across breakpoints/themes/API scenarios using DevTools.
- **ChatGPT:** Assisted with code organisation, validation logic, and API integration patterns; suggested accessibility/performance tweaks; contributed to documentation structure.

---

## 5) Innovation & Creativity
- Project accordion with delayed hide logic and reveal animations.
- Advice widget featuring manual refresh, loading/error messaging, and polite live-region updates.
- Animated circular theme toggle that pulses on change and syncs aria labels.
- Inline help/error text with focus management to keep the form accessible.

---

## 6) Learning Outcomes
- Reinforced modular JS patterns for UI state management without frameworks.
- Practiced accessible animation techniques and reduced-motion fallbacks.
- Gained experience handling third-party APIs in a static frontend.
- Improved documentation workflow by iterating alongside AI assistance.
