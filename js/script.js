// ---------- Smooth scrolling ----------
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Only handle in-page links like <a href="#about">
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    // Optional: update hash without jump
    history.pushState(null, '', id);
  });
});

// ---------- Dark mode toggle with memory ----------
const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const STORAGE_KEY = 'theme'; // 'dark' or 'light'

// Apply a theme ('dark' or 'light')
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggleBtn.setAttribute('aria-pressed', String(theme === 'dark'));
  toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}

// Initialize: use saved theme or system preference
(function initTheme(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(systemDark ? 'dark' : 'light');
  }
})();

// Toggle on click and save
let themePulseTimer = null;
toggleBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
  toggleBtn.classList.remove('theme-toggle--pulse');
  if (themePulseTimer) clearTimeout(themePulseTimer);
  // Trigger a gentle pulse animation to emphasize the change
  requestAnimationFrame(() => {
    toggleBtn.classList.add('theme-toggle--pulse');
    themePulseTimer = setTimeout(() => {
      toggleBtn.classList.remove('theme-toggle--pulse');
    }, 500);
  });
});

// ---------- Projects accordion ----------
const projectCards = document.querySelectorAll('.project-card');
const projectsList = document.querySelector('.projects-list');
const projectsEmptyMessage = document.getElementById('projectsEmpty');

if (projectsList && projectsEmptyMessage) {
  if (projectCards.length === 0) {
    projectsEmptyMessage.hidden = false;
    projectsEmptyMessage.classList.add('reveal', 'is-visible');
  } else {
    projectsEmptyMessage.hidden = true;
    projectsEmptyMessage.classList.remove('is-visible');
  }
}

projectCards.forEach(card => {
  const toggle = card.querySelector('.project-toggle');
  const content = card.querySelector('.project-content');
  if (!toggle || !content) return;

  const startExpanded = toggle.getAttribute('aria-expanded') === 'true';
  card.classList.toggle('is-open', startExpanded);

  const hideContent = event => {
    if (event.propertyName !== 'opacity') return;
    if (toggle.getAttribute('aria-expanded') === 'true') return;
    content.hidden = true;
    content.removeEventListener('transitionend', hideContent);
  };

  if (prefersReduced) {
    content.hidden = !startExpanded;
    if (startExpanded) content.classList.add('is-visible');

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;
      card.classList.toggle('is-open', !expanded);
    });
    return;
  }

  if (startExpanded) {
    content.hidden = false;
    content.classList.add('is-visible');
  } else {
    content.hidden = true;
    content.classList.remove('is-visible');
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      toggle.setAttribute('aria-expanded', 'false');
      card.classList.remove('is-open');
      content.classList.remove('is-visible');
      content.addEventListener('transitionend', hideContent);
    } else {
      toggle.setAttribute('aria-expanded', 'true');
      card.classList.add('is-open');
      content.removeEventListener('transitionend', hideContent);
      content.hidden = false;
      requestAnimationFrame(() => {
        content.classList.add('is-visible');
      });
    }
  });
});

// ---------- Scroll reveal animations ----------
const revealElements = document.querySelectorAll('.reveal');
if (prefersReduced) {
  revealElements.forEach(el => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ---------- Advice of the day ----------
const adviceText = document.getElementById('adviceText');
const adviceRefresh = document.getElementById('adviceRefresh');
const adviceStatus = document.getElementById('adviceStatus');
const ADVICE_ENDPOINT = 'https://api.adviceslip.com/advice';

if (adviceText && adviceRefresh && adviceStatus) {
  const setAdviceLoading = () => {
    adviceText.textContent = 'Fetching advice...';
    adviceStatus.textContent = 'Loading new advice...';
    adviceStatus.classList.remove('is-error');
    adviceRefresh.disabled = true;
    adviceRefresh.setAttribute('aria-busy', 'true');
  };

  const setAdviceIdle = () => {
    adviceRefresh.disabled = false;
    adviceRefresh.removeAttribute('aria-busy');
  };

  const showAdviceStatus = (message, isError = false) => {
    adviceStatus.textContent = message;
    adviceStatus.classList.toggle('is-error', isError);
  };

  const fetchAdvice = async (trigger = 'auto') => {
    setAdviceLoading();
    try {
      const response = await fetch(`${ADVICE_ENDPOINT}?t=${Date.now()}`, {
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      const payload = await response.json();
      const advice = payload?.slip?.advice;
      if (!advice) {
        throw new Error('Advice not found in response.');
      }

      adviceText.textContent = `"${advice}"`;
      showAdviceStatus(trigger === 'manual' ? 'Here\'s another piece of advice.' : 'Loaded today\'s advice.');
    } catch (error) {
      console.error('Advice fetch failed:', error);
      adviceText.textContent = 'No advice available right now.';
      showAdviceStatus('Could not load advice. Please try again.', true);
    } finally {
      setAdviceIdle();
    }
  };

  adviceRefresh.addEventListener('click', () => fetchAdvice('manual'));
  fetchAdvice('auto');
}

// ---------- Contact form feedback ----------
const contactForm = document.querySelector('#contact form');
const formStatus = document.getElementById('formStatus');
let formStatusTimer = null;
let formStatusHideTimer = null;

if (contactForm && formStatus) {
  const nameInput = contactForm.querySelector('#name');
  const emailInput = contactForm.querySelector('#email');
  const messageInput = contactForm.querySelector('#message');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const fieldErrors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    message: document.getElementById('messageError')
  };

  const resetStatusTimers = () => {
    if (formStatusTimer) {
      clearTimeout(formStatusTimer);
      formStatusTimer = null;
    }
    if (formStatusHideTimer) {
      clearTimeout(formStatusHideTimer);
      formStatusHideTimer = null;
    }
  };

  const hideFormStatus = () => {
    formStatus.classList.remove('is-visible');
    formStatusTimer = null;
    formStatusHideTimer = setTimeout(() => {
      formStatus.hidden = true;
      formStatusHideTimer = null;
    }, 300);
  };

  const showFormStatus = (message, type = 'info') => {
    resetStatusTimers();
    formStatus.hidden = false;
    formStatus.textContent = message;
    formStatus.classList.remove('is-error', 'is-success');
    if (type === 'error') {
      formStatus.classList.add('is-error');
    } else if (type === 'success') {
      formStatus.classList.add('is-success');
      formStatusTimer = setTimeout(hideFormStatus, 4000);
    }
    requestAnimationFrame(() => formStatus.classList.add('is-visible'));
  };

  const setFieldError = (input, message) => {
    if (!input) return;
    const errorElement = fieldErrors[input.name];
    if (!errorElement) return;

    if (message) {
      errorElement.textContent = message;
      errorElement.hidden = false;
      input.setAttribute('aria-invalid', 'true');
      if (typeof input.setCustomValidity === 'function') {
        input.setCustomValidity(message);
      }
    } else {
      errorElement.textContent = '';
      errorElement.hidden = true;
      input.removeAttribute('aria-invalid');
      if (typeof input.setCustomValidity === 'function') {
        input.setCustomValidity('');
      }
    }
  };

  const validateField = (input, showEmptyError = false) => {
    if (!input) return true;
    const value = input.value.trim();
    let message = '';

    switch (input.name) {
      case 'name':
        if (!value && showEmptyError) {
          message = 'Please enter your name.';
        }
        break;
      case 'email':
        if (!value) {
          if (showEmptyError) {
            message = 'Please enter your email address.';
          }
        } else if (!emailPattern.test(value)) {
          message = 'Please enter a valid email address (e.g. name@example.com).';
        }
        break;
      case 'message':
        if (!value && showEmptyError) {
          message = 'Please enter a message.';
        }
        break;
      default:
        break;
    }

    setFieldError(input, message);
    return message === '';
  };

  const inputs = [nameInput, emailInput, messageInput].filter(Boolean);

  const clearStatusIfResolved = () => {
    if (
      !inputs.length ||
      !formStatus.classList.contains('is-error') ||
      formStatus.hidden
    ) {
      return;
    }
    const hasInvalid = inputs.some(input => input.getAttribute('aria-invalid') === 'true');
    if (!hasInvalid) {
      hideFormStatus();
    }
  };

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateField(input, false);
      clearStatusIfResolved();
    });
    input.addEventListener('blur', () => validateField(input, true));
  });

  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const isNameValid = validateField(nameInput, true);
    const isEmailValid = validateField(emailInput, true);
    const isMessageValid = validateField(messageInput, true);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showFormStatus('Please fix the highlighted fields.', 'error');
      const firstInvalid = inputs.find(input => input.getAttribute('aria-invalid') === 'true');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    showFormStatus('Sending message...', 'info');

    setTimeout(() => {
      showFormStatus('Thanks! Your message was sent (demo).', 'success');
      contactForm.reset();
      inputs.forEach(input => setFieldError(input, ''));
    }, 600);
  });
}
