// src/components/displayFavouritesMovieList.js
import { createMovieListComponent } from "./createMovieListComponent.js";

export const displayFavouritesMovieList = (movie) => {
  const container = document.querySelector(".display_favourite_movie_lists");

  // Create a wrapper for the movie
  const wrapper = document.createElement("div");
  createMovieListComponent(wrapper, movie);

  // Prepend the wrapper to accumulate favorites
  container.insertBefore(wrapper, container.firstChild);
};
