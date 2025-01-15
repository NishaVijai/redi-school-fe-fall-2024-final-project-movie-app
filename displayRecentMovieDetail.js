import { createMovieDetailsComponent } from "./createMovieDetailsComponent.js";
export const displayRecentMovieDetail = (movieDetails) => {
  const recentMovieDetailsContainer = document.querySelector(".recent_movie_details_container");

  recentMovieDetailsContainer.innerHTML = "";
  createMovieDetailsComponent(recentMovieDetailsContainer, movieDetails);
};
