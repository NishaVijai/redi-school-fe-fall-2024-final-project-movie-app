import { displaySearchResultMovieList } from "./displaySearchResultMovieList.js";

export const getSearchResultMovieList = async (inputValue) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const URL = `${apiUrl}?s=${inputValue}&page=1&apikey=${apiKey}`;

  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");

  loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");

  await fetch(URL).then(response => response.json()).then(data => {
    loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
    if (data.Response == "True") displaySearchResultMovieList(data.Search);
  });
};
