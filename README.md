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
  - Form status banner plus animated success/error feedback
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
- Planning semantic HTML structure and container classes
- Building reusable CSS tokens and animated components (accordion, theme toggle)
- Adding smooth scrolling, reveal animations, and advice API integration
- Implementing inline form validation, ARIA messaging, and error handling
- Drafting this README, the AI Usage Report, and technical documentation updates

**My role:**
- Reviewed, adapted, and tested every AI-generated snippet
- Tuned styling to match the assignment brief and personal preferences
- Verified accessibility, animation timing, and API behaviour in DevTools

For the full log, see [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

---

## 📄 Documentation

- **[Technical Documentation](docs/technical-documentation.md)** – Architecture, code structure, and implementation details
- **[AI Usage Report](docs/ai-usage-report.md)** – Detailed AI assistance breakdown

---

## 🌐 Live Demo

Available at: https://endearing-chebakia-5604e8.netlify.app/

---

## 📄 License

This project is for academic purposes (KFUPM SWE363 – Assignment 2).
You may reuse or adapt it for learning.
