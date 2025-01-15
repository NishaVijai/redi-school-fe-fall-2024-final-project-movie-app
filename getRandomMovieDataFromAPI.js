import { displayMovieListComponent } from "./displayMovieListComponent.js";

export const getRandomMovieDataFromAPI = async (htmlContainer, inputValue, htmlParentContainer) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const headerElement = document.querySelector("header");
  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");

  const URL = `${apiUrl}?s=${inputValue}&page=1?&apikey=${apiKey}`;

  loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");
  loaderInfiniteSpinnerSVG.scrollIntoView();

  await fetch(URL).then(response => response.json()).then(data => {
    if (data.Response == "True") {
      loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");

      displayMovieListComponent(htmlContainer, data.Search, htmlParentContainer);
      headerElement.scrollIntoView();
    }
  });
};
