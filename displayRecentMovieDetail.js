// src/components/displayRecentMovieDetail.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";

export const displayRecentMovieDetail = (movie) => {
  const container = document.querySelector(".display_recent_movie_details_list");
  const emptyText = document.querySelector(".recent_movie_details_list_empty_text");
  const movieDetailsEmptyText = document.querySelector(".movie_details_container_empty_text");

  // Clear container to show only the latest movie
  container.innerHTML = "";

  // Hide empty text
  if (emptyText) {
    emptyText.classList.add("hide_element");
  }

  // Hide movie details empty state message
  if (movieDetailsEmptyText) {
    movieDetailsEmptyText.classList.add("hide_element");
  }

  // Render only the current movie
  createMovieDetailsComponent(container, movie);
};
