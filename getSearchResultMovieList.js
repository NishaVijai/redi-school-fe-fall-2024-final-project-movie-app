import { displayMovieListComponent } from "./displayMovieListComponent.js";

export const getSearchResultMovieList = async (inputValue) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const URL = `${apiUrl}?s=${inputValue}&page=1&apikey=${apiKey}`;

  const displaySearchResultMovieListContainer = document.querySelector(".search_result_movies_container");

  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");

  loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");
  loaderInfiniteSpinnerSVG.scrollIntoView();

  await fetch(URL).then(response => response.json()).then(data => {
    if (data.Response == "True") {
      loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
      displayMovieListComponent(displaySearchResultMovieListContainer, data.Search);
    }
  });
};
