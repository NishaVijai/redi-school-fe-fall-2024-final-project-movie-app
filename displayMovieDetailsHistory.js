import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
import { displayRecentMovieDetail } from "./displayRecentMovieDetail.js";

export const displayMovieDetailsHistory = (movieDetails) => {
  const movieDetailsHistoryContainer = document.querySelector(".movie_details_history_container");
  const displayRecentMovieDetailsItem = movieDetailsHistoryContainer.querySelectorAll(".search_result_item");

  let searchResultItem = document.createElement("div");
  searchResultItem.classList.add("search_result_item");

  createMovieDetailsComponent(searchResultItem, movieDetails);

  movieDetailsHistoryContainer.insertBefore(searchResultItem, movieDetailsHistoryContainer.firstChild);

  if (displayRecentMovieDetailsItem.length > 0) {
    displayRecentMovieDetail(movieDetails);
  }
};
