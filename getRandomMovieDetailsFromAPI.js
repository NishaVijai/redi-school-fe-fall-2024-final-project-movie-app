import { displaySearchResultMovieDetails } from "./displaySearchResultMovieDetails.js";

export const getRandomMovieDetailsFromAPI = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const displayMovieListContainer = document.querySelector(".display_movie_list_container");
  const displayMoviesList = displayMovieListContainer.querySelectorAll(".display_movie_list_item");

  displayMoviesList.forEach(movie => {
    movie.addEventListener("click", async () => {
      const URL = `${apiUrl}?i=${movie.dataset.id}&apikey=${apiKey}`;
      const result = await fetch(URL);
      const movieDetails = await result.json();
      displaySearchResultMovieDetails(movieDetails);
    });
  });
};
