// src/utils/ui.js

const isDev = import.meta?.env?.DEV ?? true;

/* ---------------- Visibility helpers ---------------- */

export const hide = (...elements) => {
  elements.forEach(el => {
    if (!el) {
      if (isDev) {
        console.warn("[ui.hide] Attempted to hide a missing element");
      }
      return;
    }
    el.classList.add("hide_element");
  });
};

export const show = (...elements) => {
  elements.forEach(el => {
    if (!el) {
      if (isDev) {
        console.warn("[ui.show] Attempted to show a missing element");
      }
      return;
    }
    el.classList.remove("hide_element");
  });
};

/* ---------------- Style helpers ---------------- */

export const toggleDisplay = (el, shouldShow) => {
  if (!el) {
    if (isDev) {
      console.warn("[ui.toggleDisplay] Element is missing");
    }
    return;
  }

  el.style.display = shouldShow ? "block" : "none";
};

/* ---------------- Scroll helpers ---------------- */

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
