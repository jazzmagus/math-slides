/* Reveal.js Configuration
   Centralizzato, minimalista

   Transizioni disponibili:
   - 'fade' (default)
   - 'slide'
   - 'convex'
   - 'concave'
   - 'zoom'
   - 'none'
*/

// Lettura dalla query string o default
const params = new URLSearchParams(window.location.search);
const transitionType = params.get('transition') || 'slide';

const revealConfig = {
  hash: true,
  width: 1600,
  height: 900,
  margin: 0.05,
  minScale: 0.2,
  maxScale: 2.0,

  /* Transizioni */
  transition: transitionType,
  transitionSpeed: 'default',
  backgroundTransition: 'fade',

  /* Comportamento */
  embedded: false,
  center: false,
  touch: true,
  overview: true,
  keyboard: true,
  loop: false,

  /* Progresso e controlli */
  progress: true,
  controls: true,
  controlsTutorial: true,
  controlsLayout: 'bottom-right',
  controlsBackArrows: 'faded',

  /* Numerazione slide - disabilitata */
  slideNumber: false,

  /* Speaker Notes */
  notes: false,

  /* Markdown */
  markdown: {
    smartypants: true,
  },

  /* PDF export */
  pdfMaxPagesPerSlide: 1,
  pdfPageHeightOffset: -1,
};

/* Dark Mode Toggle */
function initDarkModeToggle() {
  // Leggi preferenza salvata o sistema
  const savedMode = localStorage.getItem('slideShowMode');
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = savedMode === 'dark' || (savedMode === null && prefersDark);

  applyThemeMode(isDarkMode);
}

function applyThemeMode(isDark) {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark-mode');
    html.classList.remove('light-mode');
    localStorage.setItem('slideShowMode', 'dark');
  } else {
    html.classList.remove('dark-mode');
    html.classList.add('light-mode');
    localStorage.setItem('slideShowMode', 'light');
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark-mode');
  applyThemeMode(!isDark);
}

document.addEventListener('DOMContentLoaded', initDarkModeToggle);
