// src/getRandomMovieDetailsFromAPI.js
import { attachMovieClickHandlers } from "./src/api/movieAPI.js";
import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";
import { displayMovieDetailsHistory } from "./displayMovieDetailsHistory.js";

/**
 * Attach click handlers to movie list items to fetch and display details
 * @param {HTMLElement} htmlParentContainer
 */
export const getRandomMovieDetailsFromAPI = (htmlParentContainer) => {
  const displayMoviesList = htmlParentContainer.querySelectorAll(".display_movie_list_item");

  attachMovieClickHandlers(displayMoviesList, htmlParentContainer, (movieDetails) => {
    displaySearchResultMovieDetails(movieDetails);
    displayMovieDetailsHistory(movieDetails);
  });
};
