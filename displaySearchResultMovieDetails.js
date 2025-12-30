// src/components/displaySearchResultMovieDetails.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";

export const displaySearchResultMovieDetails = (movie) => {
  const container = document.querySelector(".movie_details_container");
  const emptyText = document.querySelector(".movie_details_container_empty_text");

  container.innerHTML = ""; // clear previous
  createMovieDetailsComponent(container, movie);

  // Hide empty state message
  if (emptyText) {
    emptyText.classList.add("hide_element");
  }
};
