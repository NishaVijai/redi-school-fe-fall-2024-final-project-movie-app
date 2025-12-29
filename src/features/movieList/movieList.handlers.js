// src/features/movieList/movieList.handlers.js
import { fetchMovieDetails } from "../movieDetails/movieDetails.handlers.js";

export const bindMovieListClickHandlers = (parentContainer) => {
  // Remove existing listener to avoid duplicates
  if (parentContainer._movieListHandler) {
    parentContainer.removeEventListener("click", parentContainer._movieListHandler);
  }

  // Use event delegation to avoid attaching multiple listeners
  const handler = async (e) => {
    const movieItem = e.target.closest(".display_movie_list_item");
    if (movieItem) {
      await fetchMovieDetails(movieItem.dataset.id);
    }
  };

  parentContainer.addEventListener("click", handler);
  parentContainer._movieListHandler = handler;
};
