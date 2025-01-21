import { createMovieListComponent } from "./createMovieListComponent.js";

export const displayFavouritesMovieList = (movieDetails) => {
  const displayFavouriteMovieLists = document.querySelector(".display_favourite_movie_lists");

  createMovieListComponent(displayFavouriteMovieLists, movieDetails);
};
