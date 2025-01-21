import noImage from "./assets/images/missingImage.svg";
import { displayFavouritesMovieList } from "./displayFavouritesMovieList.js";

export let savedMovieIdsFromComponent = new Array();

export const createMovieListComponent = (htmlContainer, movieData) => {
  let movieListItem = document.createElement('div');
  movieListItem.dataset.id = movieData.imdbID;
  movieListItem.classList.add("display_movie_list_item");

  let moviePoster;

  if (movieData.Poster != "N/A") {
    moviePoster = movieData.Poster;
  }
  else {
    moviePoster = noImage;
  }

  let buttonContainerDiv = document.createElement('div');
  buttonContainerDiv.classList.add("button_container_div");

  let favouritesButton = document.createElement('button');
  favouritesButton.id = "favourites";
  favouritesButton.type = "button";
  favouritesButton.textContent = "Favourite";
  favouritesButton.classList.add("favorite_movie_button");

  buttonContainerDiv.appendChild(favouritesButton);
  movieListItem.appendChild(buttonContainerDiv);

  let imageContainerDiv = document.createElement('div');
  imageContainerDiv.classList.add("movie_list_item_image");

  let imageElement = document.createElement("img");
  imageElement.src = `${moviePoster}`;
  imageElement.alt = `${movieData.Title}`;

  imageContainerDiv.appendChild(imageElement);
  movieListItem.appendChild(imageContainerDiv);

  let titleContainerDiv = document.createElement('div');
  titleContainerDiv.classList.add("movie_list_item_title");

  let h3Element = document.createElement("h3");
  h3Element.textContent = `${movieData.Title}`;

  titleContainerDiv.appendChild(h3Element);
  movieListItem.appendChild(titleContainerDiv);

  let yearContainerDiv = document.createElement('div');
  yearContainerDiv.classList.add("movie_list_item_year");

  let pElement = document.createElement("p");
  pElement.textContent = `${movieData.Year}`;

  yearContainerDiv.appendChild(pElement);
  movieListItem.appendChild(yearContainerDiv);

  htmlContainer.insertBefore(movieListItem, htmlContainer.firstChild);

  let favButton = htmlContainer.querySelector(".favorite_movie_button");

  favButton?.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!savedMovieIdsFromComponent.includes(movieListItem.dataset.id)) {
      savedMovieIdsFromComponent.unshift(movieListItem.dataset.id);

      if (savedMovieIdsFromComponent.length > 0) {
        favButton.classList.add("favorite_movie_button_clicked");
        displayFavouritesMovieList(movieData);
      }
    }
  });
};
