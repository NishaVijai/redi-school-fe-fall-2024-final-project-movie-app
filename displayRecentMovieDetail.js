import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
export const displayRecentMovieDetail = (movieDetails) => {
  const displayRecentMovieDetailsList = document.querySelector(".display_recent_movie_details_list");

  displayRecentMovieDetailsList.innerHTML = "";
  createMovieDetailsComponent(displayRecentMovieDetailsList, movieDetails);
};
