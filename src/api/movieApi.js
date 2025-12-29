// src/api/movieAPI.js

import { renderMovies } from "../utils/display.js";

/**
 * Unified function to fetch movies by search term
 * @param {string} searchTerm - Movie title to search
 * @param {HTMLElement} container - Where to render the results
 * @param {Function} componentFn - Component to use for rendering
 */
export const fetchMoviesBySearch = async (searchTerm, container, componentFn) => {
  if (!searchTerm || !container || !componentFn) return;

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const loader = document.querySelector(".loader_infinite_spinner");

  const URL = `${apiUrl}?s=${encodeURIComponent(searchTerm)}&page=1&apikey=${apiKey}`;

  loader?.classList.remove("hide_loader_infinite_spinner");

  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.Response === "True") {
      renderMovies(componentFn, container, data.Search);
    }
  } catch (err) {
    console.error("Error fetching movies:", err);
  } finally {
    loader?.classList.add("hide_loader_infinite_spinner");
  }
};

/**
 * Unified function to fetch a single movie by IMDb ID
 * @param {string} imdbID - Movie ID
 * @param {HTMLElement} container - Where to render details
 * @param {Function} componentFn - Component to render the movie
 */
export const fetchMovieByID = async (imdbID, container, componentFn) => {
  if (!imdbID || !container || !componentFn) return;

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const loader = document.querySelector(".loader_infinite_spinner");

  const URL = `${apiUrl}?i=${imdbID}&apikey=${apiKey}`;

  loader?.classList.remove("hide_loader_infinite_spinner");

  try {
    const response = await fetch(URL);
    const movieDetails = await response.json();

    if (movieDetails.Response === "True") {
      renderMovies(componentFn, container, movieDetails, { prepend: false });
    }
  } catch (err) {
    console.error("Error fetching movie details:", err);
  } finally {
    loader?.classList.add("hide_loader_infinite_spinner");
  }
};

/**
 * Attach click handlers to a list of movie elements to fetch details on click
 * @param {NodeList} movieList - List of movie items with dataset.id
 * @param {HTMLElement} container - Container to render movie details
 * @param {Function} componentFn - Component to render movie details
 */
export const attachMovieClickHandlers = (movieList, container, componentFn) => {
  if (!movieList || !container || !componentFn) return;

  movieList.forEach((movie) => {
    movie.addEventListener("click", () => {
      const imdbID = movie.dataset.id;
      if (!imdbID) return;
      fetchMovieByID(imdbID, container, componentFn);
    });
  });
};
