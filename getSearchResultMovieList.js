// src/getSearchResultMovieList.js
import { fetchMoviesBySearch } from "./api/movieAPI.js";
import { displayMovieListComponent } from "./displayMovieListComponent.js";

/**
 * Fetch search result list by input value
 * @param {string} inputValue
 */
export const getSearchResultMovieList = async (inputValue) => {
  const displaySearchResultMovieListContainer = document.querySelector(".search_result_movies_container");

  await fetchMoviesBySearch(inputValue, displaySearchResultMovieListContainer, displayMovieListComponent);
};
