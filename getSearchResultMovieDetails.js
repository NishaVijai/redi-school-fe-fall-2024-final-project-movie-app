import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";

export const getSearchResultMovieDetails = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchResultContainer = document.querySelector(".movie_details_container");
  const searchResultMoviesList = searchResultDropdownList.querySelectorAll(".search_movie_list_item");
  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");
  // const searchInput = document.getElementById("search_input_box");

  searchResultMoviesList.forEach(movie => {
    movie.addEventListener("click", async () => {
      searchResultContainer.classList.remove("hide_element");
      // searchInput.value = "";

      const URL = `${apiUrl}?i=${movie.dataset.id}&apikey=${apiKey}`;

      loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");
      // loaderInfiniteSpinnerSVG.scrollIntoView();

      await fetch(URL).then(response => response.json()).then(movieDetails => {
        if (movieDetails.Response == "True") {
          loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
          displaySearchResultMovieDetails(movieDetails);
        }
      });
    });
  });
};
