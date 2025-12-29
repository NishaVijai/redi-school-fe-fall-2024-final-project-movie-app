// src/components/displayMovieListComponent.js
import { createMovieListComponent } from "./createMovieListComponent.js";
import { bindMovieListClickHandlers } from "./src/features/movieList/movieList.handlers.js";

export const displayMovieListComponent = (container, movies, htmlParentContainer) => {
  // Clear container to avoid duplicate elements when re-rendering
  container.innerHTML = "";

  // Render each movie directly (no renderMovies wrapper complexity)
  movies.forEach(movie => {
    createMovieListComponent(container, movie);
  });

  // Bind click handlers to display movie details
  bindMovieListClickHandlers(htmlParentContainer);
};
