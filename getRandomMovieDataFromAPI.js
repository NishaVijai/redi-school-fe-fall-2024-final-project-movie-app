// src/getRandomMovieDataFromAPI.js
import { fetchMoviesBySearch, attachMovieClickHandlers } from "./api/movieAPI.js";
import { displayMovieListComponent } from "./displayMovieListComponent.js";
import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";

/**
 * Fetch movies by search term and render the list
 * @param {HTMLElement} htmlContainer
 * @param {string} inputValue
 * @param {HTMLElement} htmlParentContainer
 */
export const getRandomMovieDataFromAPI = async (htmlContainer, inputValue, htmlParentContainer) => {
  await fetchMoviesBySearch(inputValue, htmlContainer, displayMovieListComponent);

  // Attach click events to movie items for details
  const movieListElements = htmlParentContainer.querySelectorAll(".display_movie_list_item");
  attachMovieClickHandlers(movieListElements, htmlParentContainer, displaySearchResultMovieDetails);
};
