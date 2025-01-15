import { createMovieListComponent } from "./createMovieListComponent.js";

export const displayFavouritesMovieList = (movieDetails) => {
  const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");

  createMovieListComponent(displayFavouritesMovieListContainer, movieDetails);
};
