// src/features/movieList/movieList.handlers.js
import { dom } from "../../utils/dom.js";
import { fetchMovieDetails } from "../movieDetails/movieDetails.handlers.js";
import { hide, show } from "../../utils/ui.js";

export const bindMovieListClickHandlers = (parentContainer) => {
  const movieItems =
    parentContainer.querySelectorAll(".display_movie_list_item");

  movieItems.forEach(movie => {
    movie.addEventListener("click", async () => {
      await fetchMovieDetails(movie.dataset.id);
    });
  });
};
