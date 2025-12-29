// src/utils/display.js

/**
 * Higher-order function to render movie data using a component.
 * @param {Function} componentFn - Component function (e.g., createMovieListComponent or createMovieDetailsComponent)
 * @param {HTMLElement} container - DOM container to render into
 * @param {Object|Array} data - Single movie object or array of movies
 * @param {Object} [options] - Additional options (e.g., prepend: true/false)
 */
export const renderMovies = (componentFn, container, data, options = {}) => {
  if (!container || !componentFn || !data) return;

  const { prepend = true } = options;

  const items = Array.isArray(data) ? data : [data];

  items.forEach((movie) => {
    if (prepend) {
      const wrapper = document.createElement("div");
      componentFn(wrapper, movie);
      container.insertBefore(wrapper, container.firstChild);
    } else {
      componentFn(container, movie);
    }
  });
};
