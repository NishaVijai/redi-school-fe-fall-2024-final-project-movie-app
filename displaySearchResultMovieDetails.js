// src/components/displaySearchResultMovieDetails.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
import { renderMovies } from "./src/utils/display.js";

export const displaySearchResultMovieDetails = (movie) => {
  const container = document.querySelector(".movie_details_container");
  container.innerHTML = ""; // clear previous
  renderMovies(createMovieDetailsComponent, container, movie, { prepend: false });
};
