import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";
import { displayMovieDetailsHistory } from "./displayMovieDetailsHistory.js";

export const getRandomMovieDetailsFromAPI = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");

  const displayMovieListContainer = document.querySelector(".display_movie_list_container");
  const displayMoviesList = displayMovieListContainer.querySelectorAll(".display_movie_list_item");

  const searchResultContainer = document.querySelector(".search_result_container");

  displayMoviesList.forEach(movie => {
    movie.addEventListener("click", async () => {
      const URL = `${apiUrl}?i=${movie.dataset.id}&apikey=${apiKey}`;

      loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");

      await fetch(URL).then(response => response.json()).then(movieDetails => {
        loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
        displaySearchResultMovieDetails(movieDetails);
        displayMovieDetailsHistory(movieDetails);
        searchResultContainer.scrollIntoView();
      });
    });
  });
};
