// src/services/movieApi.service.js
import { dom } from "../utils/dom.js";
import { displayMovieListComponent } from "../../displayMovieListComponent.js";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

/* ---------------- Loader ---------------- */

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

/* ---------------- Search / Movie List ---------------- */

export const fetchMovieList = async (
  query,
  targetContainer,
  parentContainer = targetContainer
) => {
  try {
    const URL = `${apiUrl}?s=${query}&page=1&apikey=${apiKey}`;

    showLoader();

    // ✅ Always clear previous content first
    targetContainer.innerHTML = "";

    const response = await fetch(URL);
    const data = await response.json();

    if (data.Response === "True" && Array.isArray(data.Search)) {
      // ✅ Limit to max 10 movies
      const limitedMovies = data.Search.slice(0, 10);

      displayMovieListComponent(
        targetContainer,
        limitedMovies,
        parentContainer
      );

      document.querySelector("header")?.scrollIntoView();
    } else {
      // ✅ Show message ONLY when no results
      targetContainer.innerHTML = "<p>No movies found.</p>";
    }
  } catch (error) {
    console.error("Failed to fetch movie list:", error);

    // ✅ Friendly error message
    targetContainer.innerHTML =
      "<p>Something went wrong. Please try again.</p>";
  } finally {
    hideLoader();
  }
};

/* ---------------- Movie Details by ID ---------------- */

export const fetchMovieDetails = async (imdbID) => {
  try {
    const URL = `${apiUrl}?i=${imdbID}&plot=full&apikey=${apiKey}`;

    showLoader();

    const response = await fetch(URL);
    const data = await response.json();

    if (data.Response === "True") {
      return data;
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    return null;
  } finally {
    hideLoader();
  }
};
