// src/components/displayFavouritesMovieList.js
import { createMovieListComponent } from "./createMovieListComponent.js";
import { renderMovies } from "./src/utils/display.js";

export const displayFavouritesMovieList = (movie) => {
  const container = document.querySelector(".display_favourite_movie_lists");
  renderMovies(createMovieListComponent, container, movie, { prepend: true });
};
