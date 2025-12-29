// src/components/displayMovieListComponent.js
import { createMovieListComponent } from "./createMovieListComponent.js";
import { bindMovieListClickHandlers } from "./src/features/movieList/movieList.handlers.js";
import { renderMovies } from "./src/utils/display.js";

export const displayMovieListComponent = (container, movies, htmlParentContainer) => {
  // // Render movies without prepending (don't use default prepend: true)
  // renderMovies(createMovieListComponent, container, movies, { prepend: false });
  // // Bind handlers to the actual container where movies are rendered
  // bindMovieListClickHandlers(container);
  renderMovies(createMovieListComponent, container, movies);
  bindMovieListClickHandlers(htmlParentContainer);
};
