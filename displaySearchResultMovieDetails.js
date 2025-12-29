// src/components/displaySearchResultMovieDetails.js
import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";

export const displaySearchResultMovieDetails = (movie) => {
  const container = document.querySelector(".movie_details_container");
  container.innerHTML = ""; // clear previous
  createMovieDetailsComponent(container, movie);
};
