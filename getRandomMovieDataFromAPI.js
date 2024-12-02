import { displayRandomMovieDataFromAPI } from "./displayRandomMovieDataFromAPI.js";

export const getRandomMovieDataFromAPI = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  // const searchTerm = "Avengers";
  const searchTerm = "The Help";

  const loaderInfiniteSpinnerSVG = document.querySelector(".loader_infinite_spinner");

  const URL = `${apiUrl}?s=${searchTerm}&page=1?&apikey=${apiKey}`;

  loaderInfiniteSpinnerSVG.classList.remove("hide_loader_infinite_spinner");

  await fetch(URL).then(response => response.json()).then(data => {
    loaderInfiniteSpinnerSVG.classList.add("hide_loader_infinite_spinner");
    if (data.Response == "True") displayRandomMovieDataFromAPI(data.Search);
  });
};
