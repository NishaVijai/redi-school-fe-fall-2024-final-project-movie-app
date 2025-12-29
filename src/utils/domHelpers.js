// get element safely
export const getEl = (selector) => document.querySelector(selector);
export const getEls = (selector) => document.querySelectorAll(selector);

// append or insert element
export const insertAtTop = (container, element) => container?.insertBefore(element, container.firstChild);
export const appendChild = (container, element) => container?.appendChild(element);

// show/hide empty text based on list length
export const toggleEmptyText = (container, listSelector, emptyTextSelector) => {
  const list = getEls(listSelector, container);
  const emptyText = getEl(emptyTextSelector);
  if (!emptyText) return;
  emptyText.classList.toggle("hide_element", list.length > 0);
};

// handle poster image fallback
export const setPosterImage = (imgEl, posterUrl, fallback) => {
  if (!imgEl) return;
  imgEl.src = posterUrl && posterUrl !== "N/A" ? posterUrl : fallback;
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = fallback;
  };
};
