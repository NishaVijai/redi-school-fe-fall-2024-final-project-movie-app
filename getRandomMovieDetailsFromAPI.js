import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";
import { displayMovieDetailsHistory } from "./displayMovieDetailsHistory.js";

export const getRandomMovieDetailsFromAPI = (htmlParentContainer) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");
  const displayMoviesList = htmlParentContainer.querySelectorAll(".display_movie_list_item");
  const searchResultContainer = document.querySelector(".movie_details_container");

  displayMoviesList.forEach(movie => {
    movie.addEventListener("click", async () => {

      // console.log("getRandomMovieDetailsFromAPI", movie);
      const URL = `${apiUrl}?i=${movie.dataset.id}&apikey=${apiKey}`;

      loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");
      // loaderInfiniteSpinnerSVG.scrollIntoView();

      await fetch(URL).then(response => response.json()).then(movieDetails => {
        if (movieDetails.Response == "True") {
          loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
          displaySearchResultMovieDetails(movieDetails);
          displayMovieDetailsHistory(movieDetails);
          searchResultContainer.scrollIntoView();
        }
      });
    });
  });
};
