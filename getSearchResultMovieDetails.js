import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";

export const getSearchResultMovieDetails = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchResultDropdownList = document.querySelector(".search_result_dropdown_list");
  const searchResultMoviesList = searchResultDropdownList.querySelectorAll(".search_movie_list_item");

  // const searchInput = document.getElementById("search_input_box");

  searchResultMoviesList.forEach(movie => {
    movie.addEventListener("click", async () => {
      searchResultDropdownList.classList.add("hide_search_result_dropdown_list");

      // searchInput.value = "";

      const URL = `${apiUrl}?i=${movie.dataset.id}&apikey=${apiKey}`;
      const result = await fetch(URL);
      const movieDetails = await result.json();

      displaySearchResultMovieDetails(movieDetails);
    });
  });
};
