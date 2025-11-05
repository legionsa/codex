import ThemeManager, { Theme } from './ThemeManager';

export default class ThemeToggle {
  /**
   * @type {ThemeManager}
   */
  themeManager;

  /**
   * @type {HTMLElement}
   */
  button;

  /**
   * Theme icons mapping
   * @type {Object.<string, string>}
   */
  icons = {
    [Theme.LIGHT]: '☀️',
    [Theme.DARK]: '🌙',
    [Theme.SYSTEM]: '🖥️'
  };

  /**
   * Initialize theme toggle
   */
  constructor() {
    this.themeManager = new ThemeManager();
    this.createButton();
    this.addToHeader();
  }

  /**
   * Create theme toggle button
   */
  createButton() {
    this.button = document.createElement('button');
    this.button.className = 'p-2 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--background-primary)] hover:text-accent transition-colors';
    this.updateButtonIcon();
    this.button.addEventListener('click', () => {
      this.themeManager.toggleTheme();
      this.updateButtonIcon();
    });
  }

  /**
   * Update button icon based on current theme
   */
  updateButtonIcon() {
    const currentTheme = this.themeManager.getCurrentTheme();
    this.button.textContent = this.icons[currentTheme];
    this.button.setAttribute('title', `Switch theme (currently ${currentTheme})`);
    
    // Add animation on icon change
    this.button.classList.add('animate-spin');
    setTimeout(() => this.button.classList.remove('animate-spin'), 300);
  }

  /**
   * Add button to theme toggle container in header
   */
  addToHeader() {
    const container = document.getElementById('theme-toggle-container');
    if (container) {
      container.appendChild(this.button);
    } else {
      console.warn('Theme toggle container not found in header');
    }
  }
}