import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
import { displayRecentMovieDetail } from "./displayRecentMovieDetail.js";

export const displayMovieDetailsHistory = (movieDetails) => {
  const displayMovieDetailsHistoryList = document.querySelector(".display_movie_details_history_list");
  const displayRecentMovieDetailsItem = displayMovieDetailsHistoryList.querySelectorAll(".search_result_item");
  const displayMovieDetailsHistoryListEmptyText = document.querySelector(".display_movie_details_history_list_empty_text");

  displayMovieDetailsHistoryListEmptyText.classList.remove("hide_element");

  let searchResultItem = document.createElement("div");
  searchResultItem.classList.add("search_result_item");

  createMovieDetailsComponent(searchResultItem, movieDetails);

  displayMovieDetailsHistoryList.insertBefore(searchResultItem, displayMovieDetailsHistoryList.firstChild);

  if (displayRecentMovieDetailsItem.length > 0) {
    displayMovieDetailsHistoryListEmptyText.classList.add("hide_element");
    displayRecentMovieDetail(movieDetails);
  }
};
