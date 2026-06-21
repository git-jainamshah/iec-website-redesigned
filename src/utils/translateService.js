/**
 * translateService.js
 *
 * Programmatically controls Google Translate Element API.
 * Our custom language switcher triggers translations; default Google UI hidden via CSS.
 */

const STORAGE_KEY = 'iecLang';
let initialized = false;
let widgetReady = false;
let pendingLang = null;

/**
 * Load the Google Translate script and initialise the hidden widget.
 */
function init() {
  if (initialized) return;
  initialized = true;

  // Container for Google Translate to bind to (hidden via CSS)
  if (!document.getElementById('google_translate_element')) {
    const div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);
  }

  // Callback that Google's script looks for on window
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'hi,gu,mr,te,ta,ml,kn,fr,es,de,zh-CN',
        autoDisplay: false,
      },
      'google_translate_element'
    );

    // Poll until the combo select is ready
    _waitForWidget(() => {
      widgetReady = true;
      // Restore persisted language
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved !== 'en') {
        _applyLanguage(saved);
      }
      // If a language was requested before widget was ready
      if (pendingLang) {
        _applyLanguage(pendingLang);
        pendingLang = null;
      }
    });
  };

  // Load Google Translate script
  const script = document.createElement('script');
  script.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Set the active language. Called from our custom language switcher.
 * @param {string} code — ISO language code, e.g. 'hi', 'fr', 'zh-CN'
 */
function setLanguage(code) {
  const prevLang = localStorage.getItem(STORAGE_KEY) || 'en';
  localStorage.setItem(STORAGE_KEY, code);

  if (code === 'en') {
    // Reset to English — clear cookie + reload for guaranteed clean state
    _clearGoogleTranslateCookies();
    window.location.reload();
    return;
  }

  if (prevLang !== 'en' && prevLang !== code) {
    // Switching between two non-English languages
    // Google Translate can't reliably switch — set cookie and reload
    _setGoogleTranslateCookie(code);
    window.location.reload();
    return;
  }

  if (!widgetReady) {
    pendingLang = code;
    return;
  }

  _applyLanguage(code);
}

/**
 * Get the persisted language code.
 * @returns {string}
 */
function getCurrentLanguage() {
  return localStorage.getItem(STORAGE_KEY) || 'en';
}

/**
 * Call after SPA route changes so new page content gets translated.
 */
function onRouteChange() {
  const lang = getCurrentLanguage();
  if (lang && lang !== 'en') {
    // Short delay for React to finish rendering the new route
    setTimeout(() => {
      if (widgetReady) {
        _applyLanguage(lang);
      }
    }, 200);
  }
}

/* ── Private helpers ──────────────────────────────────── */

/**
 * Poll until the Google Translate <select> widget is in the DOM.
 */
function _waitForWidget(callback, attempts = 0) {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    callback();
  } else if (attempts < 50) {
    setTimeout(() => _waitForWidget(callback, attempts + 1), 100);
  }
}

/**
 * Set the Google Translate combo to the target language.
 */
function _applyLanguage(code) {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = code;
    select.dispatchEvent(new Event('change'));
  }
}

function _setGoogleTranslateCookie(code) {
  const val = `/en/${code}`;
  const domains = ['', window.location.hostname, '.' + window.location.hostname];
  domains.forEach(domain => {
    const d = domain ? `; domain=${domain}` : '';
    document.cookie = `googtrans=${val}; path=/${d}`;
  });
}

function _clearGoogleTranslateCookies() {
  const domains = ['', window.location.hostname, '.' + window.location.hostname];
  domains.forEach(domain => {
    const d = domain ? `; domain=${domain}` : '';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${d}`;
  });
}

const translateService = { init, setLanguage, getCurrentLanguage, onRouteChange };
export default translateService;

