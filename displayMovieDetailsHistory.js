// src/components/displayMovieDetailsHistory.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
import { displayRecentMovieDetail } from "./displayRecentMovieDetail.js";

export const displayMovieDetailsHistory = (movie) => {
  const container = document.querySelector(".display_movie_details_history_list");
  const emptyText = document.querySelector(".display_movie_details_history_list_empty_text");
  const movieDetailsEmptyText = document.querySelector(".movie_details_container_empty_text");

  // Create a wrapper for the new movie details
  const wrapper = document.createElement("div");
  wrapper.classList.add("movie_details_wrapper");

  // Render the movie details into the wrapper
  createMovieDetailsComponent(wrapper, movie);

  // Prepend the wrapper to the container
  container.insertBefore(wrapper, container.firstChild);

  // Hide empty text once we have movies
  if (emptyText && container.querySelectorAll("[class*='movie']").length > 0) {
    emptyText.classList.add("hide_element");
  }

  // Hide movie details empty state message
  if (movieDetailsEmptyText) {
    movieDetailsEmptyText.classList.add("hide_element");
  }

  // Update recent movie detail (show only the latest)
  displayRecentMovieDetail(movie);
};
