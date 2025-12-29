// src/components/displayMovieDetailsHistory.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
import { displayRecentMovieDetail } from "./displayRecentMovieDetail.js";
import { renderMovies } from "./src/utils/display.js";

export const displayMovieDetailsHistory = (movie) => {
  const container = document.querySelector(".display_movie_details_history_list");
  const emptyText = document.querySelector(".display_movie_details_history_list_empty_text");

  // Accumulate movies (prepend: true adds to list without clearing)
  renderMovies(createMovieDetailsComponent, container, movie, { prepend: true });

  // Hide empty text once we have movies
  if (emptyText && container.querySelectorAll("[class*='movie']").length > 0) {
    emptyText.classList.add("hide_element");
  }

  // Update recent movie detail (show only the latest)
  displayRecentMovieDetail(movie);
};
