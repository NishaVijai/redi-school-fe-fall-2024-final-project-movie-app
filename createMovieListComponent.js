import noImage from "./public/assets/images/missingImage.svg";
import { displayFavouritesMovieList } from "./displayFavouritesMovieList.js";

export let savedMovieIdsFromComponent = [];

export const createMovieListComponent = (htmlContainer, movieData) => {
  const movieListItem = document.createElement('div');
  movieListItem.dataset.id = movieData.imdbID;
  movieListItem.classList.add("display_movie_list_item");

  // ---------- Button Container ----------
  const buttonContainerDiv = document.createElement('div');
  buttonContainerDiv.classList.add("button_container_div");

  const favouritesButton = document.createElement('button');
  favouritesButton.id = "favourites";
  favouritesButton.type = "button";
  favouritesButton.textContent = "Favourite";
  favouritesButton.classList.add("favorite_movie_button");

  buttonContainerDiv.appendChild(favouritesButton);
  movieListItem.appendChild(buttonContainerDiv);

  // ---------- Image Container ----------
  const imageContainerDiv = document.createElement('div');
  imageContainerDiv.classList.add("movie_list_item_image");

  const imageElement = document.createElement("img");
  imageElement.alt = movieData.Title;

  // Set poster URL with fallback for "N/A"
  imageElement.src = movieData.Poster && movieData.Poster !== "N/A"
    ? movieData.Poster
    : noImage;

  // Handle broken / 404 URLs
  imageElement.onerror = function () {
    this.onerror = null; // prevent infinite loop
    this.src = noImage;
  };

  imageContainerDiv.appendChild(imageElement);
  movieListItem.appendChild(imageContainerDiv);

  // ---------- Title Container ----------
  const titleContainerDiv = document.createElement('div');
  titleContainerDiv.classList.add("movie_list_item_title");

  const h3Element = document.createElement("h3");
  h3Element.textContent = movieData.Title;

  titleContainerDiv.appendChild(h3Element);
  movieListItem.appendChild(titleContainerDiv);

  // ---------- Year Container ----------
  const yearContainerDiv = document.createElement('div');
  yearContainerDiv.classList.add("movie_list_item_year");

  const pElement = document.createElement("p");
  pElement.textContent = movieData.Year;

  yearContainerDiv.appendChild(pElement);
  movieListItem.appendChild(yearContainerDiv);

  // Insert movie item at the top
  htmlContainer.insertBefore(movieListItem, htmlContainer.firstChild);

  // ---------- Favourite Button Logic ----------
  favouritesButton.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!savedMovieIdsFromComponent.includes(movieListItem.dataset.id)) {
      savedMovieIdsFromComponent.unshift(movieListItem.dataset.id);

      if (savedMovieIdsFromComponent.length > 0) {
        favouritesButton.classList.add("favorite_movie_button_clicked");
        displayFavouritesMovieList(movieData);
      }
    }
  });
};
