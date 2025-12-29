import { insertAtTop, toggleEmptyText } from "./domHelpers.js";

// generic function to display a movie component in a container
export const displayMovieComponent = (containerSelector, movieDetails, createComponentFn, emptyTextSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container || !movieDetails) return;

  const wrapper = document.createElement("div");
  wrapper.classList.add("search_result_item");

  createComponentFn(wrapper, movieDetails);

  insertAtTop(container, wrapper);

  if (emptyTextSelector) toggleEmptyText(container, ".search_result_item", emptyTextSelector);
};
