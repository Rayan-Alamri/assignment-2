# AI Usage Report

**Course / Assignment:** SWE363 – Assignment 2 (Interactive Portfolio Enhancements)
**Student:** Rayan Alamri – 202247900
**Repo:** https://github.com/Rayan-Alamri/assignment-2
**Session Date:** 25/09/2025

---

## 1) Tools Used & Concrete Use Cases
- **ChatGPT (this session)**
  - Converted static project cards into an accessible accordion with animated transitions.
  - Added IntersectionObserver reveal effects and hover polish for sections/cards.
  - Integrated the Advice Slip API with loading, error, and retry states.
  - Hardened the contact form with inline validation, ARIA messaging, and animated status feedback.
  - Redesigned the circular dark/light theme toggle with scripted pulse animation and aria updates.
- **VS Code + Live Server**
  - Rapid preview while tweaking CSS animations and JS interactions.
- **Chrome DevTools**
  - Verified accessibility attributes, transition timing, and localStorage values.
  - Tested offline/error states for the advice API.

---

## 2) Benefits & Challenges
**Benefits**
- Accelerated prototyping of complex UI states (accordion + animations) without starting from scratch.
- Consistent accessibility guidance (aria attributes, focus handling, validation messaging).
- Quick iteration on the theme toggle design, matching the provided reference.

**Challenges**
- Needed to refactor existing markup/CSS to accept the new toggle button structure.
- Ensured custom validation didn’t fight native browser messages; reconciled by using `setCustomValidity` carefully.
- Cached responses from the advice API sometimes caused stale data, so we appended a timestamp and disabled cache.

---

## 3) Understanding & Rationale
- **Accordion vs. static cards:** Improves information density while keeping content screen-reader friendly through `aria-expanded` and `hidden` management.
- **IntersectionObserver reveals:** Provides motion that respects `prefers-reduced-motion`; elements progressively reveal for perceived performance.
- **Advice API loading/error UX:** Communicates background activity and lets the user retry, meeting assignment requirements.
- **Inline form errors:** Immediate feedback reduces submission friction and demonstrates client-side validation competence.
- **Animated theme toggle:** Shows design intent from the reference image and reinforces state changes visually.

---

## 4) Responsible Use of AI
- Reviewed each generated code block, refactored variable names, and removed unused branches.
- Tested all interactions manually (accordion, theme toggle, API fetch, validation) before accepting changes.
- Added explanatory comments sparingly to describe non-obvious behaviour (e.g., hiding accordion content after transition).
- Documented exactly where AI contributed (README + this report) to maintain transparency.

---

## 5) Innovation & Creativity
- Collapsible project cards with delayed hide/show logic to keep animations smooth.
- Advice widget featuring manual refresh and accessible status text.
- Animated circular theme toggle that pulses on change and adapts ARIA labels dynamically.
- Comprehensive inline form validation with focus management on first error.

---

## 6) Learning Outcomes
- Strengthened knowledge of accessible animations (respecting reduced-motion, using IntersectionObserver).
- Practiced advanced state management in vanilla JS (aria attributes, hidden vs. opacity transitions).
- Learned how to gracefully handle external API failures inside a static site.
- Reinforced the value of descriptive documentation when iterating with AI assistance.
