# Rayan Alamri – Personal Portfolio

This is a simple, responsive personal portfolio web application built for **SWE363 – Assignment 2: Foundation & AI Integration**.
It demonstrates HTML, CSS, and JavaScript fundamentals, along with AI-assisted development for structure, styling, interactivity, and documentation.

---

## 🚀 Features

- **Responsive layout**: Optimised for mobile, tablet, and desktop.
- **Sections**
  - About Me (intro + tagline)
  - Projects (expandable cards with descriptions and images)
  - Advice of the Day (live quote pulled from the Advice Slip API)
  - Contact (form UI with inline validation feedback)
- **Interactivity & enhancements**
  - Smooth in-page navigation that respects `prefers-reduced-motion`
  - Animated circular dark/light theme toggle with saved preference
  - Accessible project accordion with reveal transitions and ARIA updates
  - Advice widget with loading, error, and retry messaging
  - Form status banner plus animated success/error feedback and quick inline instructions
- **Clean design**: CSS variables for colors, spacing, and theming; card hover states and reveal animations.
- **Accessibility considerations**: Proper heading hierarchy, labelled form fields, live regions for status messages, and persistent aria state.

---

## 🛠 Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/Rayan-Alamri/assignment-1.git
   cd assignment-1
   ```
2. **Open locally**
   - Simply open `index.html` in your browser, or
   - Use a Live Server extension in VS Code for hot reload.
3. **Assets**
   - Images live under `assets/images/`
   - Replace `placeHolder.jpg` with real project screenshots when available.

---

## 🤖 AI Usage Summary

**ChatGPT assisted in:**
- Brainstorming alternate layouts, accessibility tweaks, and performance optimisations
- Providing starter snippets for the accordion, advice fetch, theme toggle animation, and form help text
- Helping summarise and format Advice Slip API responses for the UI

**My role:**
- Authored the final HTML/CSS/JS structure, adapting or rewriting AI drafts where needed
- Implemented the advice API integration, inline validation flows, help messages, and reveal animations
- Designed the animated theme toggle, tuned transitions, and ensured ARIA/state sync
- Applied AI-suggested accessibility/performance improvements after verification
- Tested behaviour across breakpoints, dark/light themes, and error scenarios
- Wrote the final documentation (README, AI report, technical guide) and kept it updated

For the full log, see [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

---

## 📄 Documentation

- **[Technical Documentation](docs/technical-documentation.md)** – Architecture, code structure, and implementation details
- **[AI Usage Report](docs/ai-usage-report.md)** – Detailed AI assistance breakdown

---

## 🌐 Live Demo

Available at: https://stellar-platypus-799482.netlify.app/#projects

---

## 📄 License

This project is for academic purposes (KFUPM SWE363 – Assignment 2).
You may reuse or adapt it for learning.
