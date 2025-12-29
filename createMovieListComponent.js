// src/components/createMovieListComponent.js
import noImage from "./public/assets/images/missingImage.svg";
import { displayFavouritesMovieList } from "./displayFavouritesMovieList.js";

export let savedMovieIdsFromComponent = [];

/**
 * Render a movie in a list with poster, title, year, and favourite button.
 * @param {HTMLElement} container - Parent container for the movie item.
 * @param {Object} movie - Movie object from OMDb API (search response).
 */
export const createMovieListComponent = (container, movie) => {
  const movieItem = document.createElement("div");
  movieItem.classList.add("display_movie_list_item");
  movieItem.dataset.id = movie.imdbID;

  /* ---------------- Favourite Button ---------------- */

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button_container_div");

  const favButton = document.createElement("button");
  favButton.type = "button";
  favButton.textContent = "Favourite";
  favButton.classList.add("favorite_movie_button");

  buttonDiv.appendChild(favButton);
  movieItem.appendChild(buttonDiv);

  /* ---------------- Poster ---------------- */

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("movie_list_item_image");

  const img = document.createElement("img");
  img.alt = movie.Title;
  img.src =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : noImage;

  img.onerror = () => {
    img.src = noImage;
  };

  imgDiv.appendChild(img);
  movieItem.appendChild(imgDiv);

  /* ---------------- Title ---------------- */

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("movie_list_item_title");

  const h3 = document.createElement("h3");
  h3.textContent = movie.Title;

  titleDiv.appendChild(h3);
  movieItem.appendChild(titleDiv);

  /* ---------------- Year ---------------- */

  const yearDiv = document.createElement("div");
  yearDiv.classList.add("movie_list_item_year");

  const pYear = document.createElement("p");
  pYear.textContent = movie.Year;

  yearDiv.appendChild(pYear);
  movieItem.appendChild(yearDiv);

  /* ---------------- Insert Item ---------------- */

  container.insertBefore(movieItem, container.firstChild);

  /* ---------------- Favourite Button Logic ---------------- */

  favButton.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent opening details

    if (!savedMovieIdsFromComponent.includes(movie.imdbID)) {
      savedMovieIdsFromComponent.unshift(movie.imdbID);
      favButton.classList.add("favorite_movie_button_clicked");
      displayFavouritesMovieList(movie);
    }
  });
};
