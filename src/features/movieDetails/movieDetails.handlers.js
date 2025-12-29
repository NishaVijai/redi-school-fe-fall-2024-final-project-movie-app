// src/features/movieDetails/movieDetails.handlers.js
import { dom } from "../../utils/dom.js";
import { displaySearchResultMovieDetails } from "../../../displaySearchResultMovieDetails.js";
import { displayMovieDetailsHistory } from "../../../displayMovieDetailsHistory.js";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const showLoader = () =>
  dom
    .main()
    ?.querySelector(".loader_infinite_spinner")
    ?.classList.remove("hide_loader_infinite_spinner");

const hideLoader = () =>
  dom
    .main()
    ?.querySelector(".loader_infinite_spinner")
    ?.classList.add("hide_loader_infinite_spinner");

/* ---------------- Movie details ---------------- */

export const fetchMovieDetails = async (movieId) => {
  if (!movieId) return;

  const URL = `${apiUrl}?i=${movieId}&apikey=${apiKey}`;

  showLoader();

  const response = await fetch(URL);
  const movieDetails = await response.json();

  if (movieDetails.Response === "True") {
    hideLoader();
    displaySearchResultMovieDetails(movieDetails);
    displayMovieDetailsHistory(movieDetails);
    dom.movieDetails()?.scrollIntoView();
  }
};
