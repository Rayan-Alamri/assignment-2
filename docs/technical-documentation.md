# Technical Documentation

**Project:** Rayan Alamri – Personal Portfolio  
**Scope:** SWE363 – Assignment 2 (Interactive Portfolio Enhancements)  
**Stack:** HTML5, CSS3, vanilla JavaScript

## 1) Overview

Single-page portfolio featuring About, Projects, Advice of the Day, and Contact sections. Recent updates focus on interactivity, accessibility, animation, and documentation.

## 2) Repository Structure

```
assignment-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── placeHolder.jpg
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md (this file)
```

## 3) Technologies & Conventions

- **HTML5:** semantic sections (`header`, `main`, `section`, `article`, `footer`).
- **CSS3:** custom properties (`--bg`, `--text`, spacing tokens), Flexbox layout, animated theme toggle.
- **JavaScript:** vanilla ES6 loaded with `defer`, modular blocks for smooth scrolling, accordions, API fetch, validation, and theming.

## 4) HTML Architecture

Key layout (abridged):

```html
<header>
  <nav class="navigation" aria-label="Primary">
    <a href="#about">About Me</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
      <span class="theme-toggle__label">Toggle theme</span>
    </button>
  </nav>
</header>

<main>
  <section id="about" class="container reveal">…</section>
  <section id="projects" class="container reveal">
    <div class="projects-list">
      <article class="project-card reveal">…</article>
    </div>
    <p id="projectsEmpty" class="projects-empty reveal" hidden>No projects found. Check back soon!</p>
  </section>

  <section id="advice" class="container reveal">
    <article class="advice-card">
      <p id="adviceText" class="advice-text" aria-live="polite">Loading advice...</p>
      <div class="advice-actions">
        <button id="adviceRefresh" type="button" class="advice-button">New Advice</button>
        <span id="adviceStatus" class="advice-status" role="status" aria-live="polite"></span>
      </div>
    </article>
  </section>

  <section id="contact" class="container reveal">
    <form>…</form>
  </section>
</main>
```

Contact form includes inline error containers (`span.field-error`) and `aria-describedby` links for screen readers.

## 5) CSS Architecture

- **Theme tokens:** Light and dark palettes share base variables; switching `data-theme` on `<html>` updates colors globally.
- **Reveal animations:** `.reveal` elements start hidden and fade/slide in when IntersectionObserver marks them visible.
- **Projects accordion:** `.project-card` hosts `.project-toggle` and `.project-content` with transitions for opacity/transform.
- **Advice card:** Styled callout with button hover states and status color modifiers.
- **Theme toggle:** Circular button with pseudo-elements transforming between sun/moon states and pulse animation (`@keyframes theme-toggle-pulse`).
- **Forms:** Inputs receive red outlines when `aria-invalid="true"`; `.field-error` text is styled beneath each field.

## 6) JavaScript Architecture (`js/script.js`)

### 6.1 Smooth Scrolling
Links with `href^="#"` scroll via `scrollIntoView` while honoring `prefers-reduced-motion`.

### 6.2 Projects Accordion
```javascript
document.querySelectorAll('.project-card').forEach(card => {
  const toggle = card.querySelector('.project-toggle');
  const content = card.querySelector('.project-content');
  // Handles aria-expanded, animated open/close, and hides content after fade-out.
});
```
Manages `aria-expanded`, toggles `.is-visible`, and delays applying `hidden` until transition end. Also checks initial `aria-expanded` state on load.

### 6.3 Reveal Observer
IntersectionObserver toggles `.is-visible` for elements with `.reveal`, skipping animation for reduced-motion users.

### 6.4 Advice of the Day
Fetches from `https://api.adviceslip.com/advice` with cache-busting timestamp, updates `adviceText`, and sets status messages (loading, success, error). Manual refresh via button.

### 6.5 Form Validation & Feedback
- Grabs `#name`, `#email`, `#message` and validates on blur/input.
- Uses regex for email domain check; sets custom validity messages.
- Displays inline errors, toggles `aria-invalid`, focuses first failing field on submit, and animates success status.

### 6.6 Theme Toggle Persistence
- Stores theme in `localStorage` under `theme` key.
- Updates `aria-pressed` and `aria-label` for accessibility.
- Adds a brief pulse animation class (`theme-toggle--pulse`) on each toggle.

## 7) Accessibility & UX Enhancements

- Headings follow H1 > H2 > H3 hierarchy; sections use `container` class for consistent width.
- Reveal and hover animations respect `prefers-reduced-motion`.
- Advice/status areas use `role="status"` with `aria-live="polite"` for screen readers.
- Contact form provides inline feedback and prevents submission until errors are resolved.
- Projects list shows `#projectsEmpty` fallback if no cards are present.

## 8) Performance Considerations

- Advice fetch appends `?t=${Date.now()}` and sets `cache: 'no-store'` to avoid stale responses.
- Project images will be switched to lazy loading (`loading="lazy"`, `decoding="async"`) if the AI assistant feature is reintroduced.
- Minimal assets: single CSS/JS files, no bundler.

## 9) Testing Checklist

- [ ] Navigation anchors scroll smoothly and land on correct section.
- [ ] Projects accordion opens/closes with appropriate ARIA state.
- [ ] Advice widget shows loading text, then advice, and surfaces errors when offline.
- [ ] Contact form highlights empty/invalid fields and confirms success with animation.
- [ ] Theme toggle animates and persists mode across reloads.
- [ ] Reveal animations trigger as sections enter the viewport.

## 10) Future Enhancements

- Persist accordion open state in `localStorage`.
- Replace placeholder images with optimized assets (WebP + width/height attributes).
- Add automated tests (Playwright/Cypress) for form validation and theme persistence.
- Integrate actual backend for contact form submissions.

---

**Maintainer:** Rayan Alamri  
**Last updated:** 25 September 2025
