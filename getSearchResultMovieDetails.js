// src/getSearchResultMovieDetails.js
import { attachMovieClickHandlers } from "./api/movieAPI.js";
import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";

/**
 * Attach click handlers for search result items
 */
export const getSearchResultMovieDetails = () => {
  const searchResultDropdownList = document.querySelector(".search_result_movies_container");
  const searchResultMoviesList = searchResultDropdownList.querySelectorAll(".search_movie_list_item");

  attachMovieClickHandlers(searchResultMoviesList, document.querySelector(".movie_details_container"), displaySearchResultMovieDetails);
};
