import noImage from "./assets/images/missingImage.svg";
import { getRandomMovieDetailsFromAPI } from "./getRandomMovieDetailsFromAPI.js";
import { displayFavouritesMovieList } from "./displayFavouritesMovieList.js";

export const displayRandomMovieDataFromAPI = (movieLists) => {
  const displayMovieListContainer = document.querySelector(".display_movie_list_container");
  const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");

  let savedMovieIds = new Array();
  let favouritesMovieLists = new Array();

  for (let i = 0; i < movieLists.length; i++) {
    let movieListItem = document.createElement('div');
    movieListItem.dataset.id = movieLists[i].imdbID;
    movieListItem.classList.add("display_movie_list_item");
    movieListItem.dataset.favourites = false;

    let moviePoster;

    if (movieLists[i].Poster != "N/A") {
      moviePoster = movieLists[i].Poster;
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

    buttonContainerDiv.appendChild(favouritesButton);
    movieListItem.appendChild(buttonContainerDiv);

    let imageContainerDiv = document.createElement('div');
    imageContainerDiv.classList.add("movie_list_item_image");

    let imageElement = document.createElement("img");
    imageElement.src = `${moviePoster}`;
    imageElement.alt = `${movieLists[i].Title}`;

    imageContainerDiv.appendChild(imageElement);
    movieListItem.appendChild(imageContainerDiv);

    let titleContainerDiv = document.createElement('div');
    titleContainerDiv.classList.add("movie_list_item_title");

    let h3Element = document.createElement("h3");
    h3Element.textContent = `${movieLists[i].Title}`;

    titleContainerDiv.appendChild(h3Element);
    movieListItem.appendChild(titleContainerDiv);

    let yearContainerDiv = document.createElement('div');
    yearContainerDiv.classList.add("movie_list_item_year");

    let pElement = document.createElement("p");
    pElement.textContent = `${movieLists[i].Year}`;

    yearContainerDiv.appendChild(pElement);
    movieListItem.appendChild(yearContainerDiv);

    displayMovieListContainer.appendChild(movieListItem);

    favouritesButton.addEventListener('click', (e) => {
      e.preventDefault();

      if (!savedMovieIds.includes(movieListItem.dataset.id)) {
        savedMovieIds.push(movieListItem.dataset.id);
        favouritesMovieLists.push(movieLists[i]);

        if (savedMovieIds.length > 0) {
          movieListItem.dataset.favourites = true;

          if (movieListItem.dataset.favourites = true) {
            displayFavouritesMovieListContainer.innerHTML = "";
            favouritesMovieLists.forEach(movie => displayFavouritesMovieList(movie));
          }
        }
      }
    });
  };

  getRandomMovieDetailsFromAPI();
};
