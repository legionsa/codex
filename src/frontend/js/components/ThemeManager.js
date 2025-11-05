/**
 * Theme options
 * @readonly
 * @enum {string}
 */
export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

/**
 * Theme manager class
 */
export default class ThemeManager {
  /**
   * @type {HTMLElement}
   */
  root;

  /**
   * @type {string}
   */
  storageKey = 'cockpit-codex-theme';

  /**
   * Initialize theme manager
   */
  constructor() {
    this.root = document.documentElement;
    this.initializeTheme();
    this.listenToSystemChanges();
  }

  /**
   * Get current theme
   * @returns {Theme}
   */
  getCurrentTheme() {
    return localStorage.getItem(this.storageKey) || Theme.SYSTEM;
  }

  /**
   * Set theme
   * @param {Theme} theme - theme to set
   */
  setTheme(theme) {
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  /**
   * Initialize theme on load
   */
  initializeTheme() {
    const theme = this.getCurrentTheme();
    this.applyTheme(theme);
  }

  /**
   * Apply theme to document
   * @param {Theme} theme - theme to apply
   */
  applyTheme(theme) {
    if (theme === Theme.SYSTEM) {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.root.classList.toggle('dark', systemDark);
    } else {
      this.root.classList.toggle('dark', theme === Theme.DARK);
    }
  }

  /**
   * Listen to system theme changes
   */
  listenToSystemChanges() {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (this.getCurrentTheme() === Theme.SYSTEM) {
          this.root.classList.toggle('dark', e.matches);
        }
      });
  }

  /**
   * Toggle between themes
   */
  toggleTheme() {
    const current = this.getCurrentTheme();
    const themes = Object.values(Theme);
    const nextIndex = (themes.indexOf(current) + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
}