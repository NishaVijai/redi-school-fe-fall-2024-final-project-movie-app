import noImage from "./assets/images/missingImage.svg";
import { getRandomMovieDetailsFromAPI } from "./getRandomMovieDetailsFromAPI.js";

export const displayRandomMovieDataFromAPI = (movieLists) => {
  const displayMovieListContainer = document.querySelector(".display_movie_list_container");

  for (let i = 0; i < movieLists.length; i++) {
    let movieListItem = document.createElement("div");

    movieListItem.dataset.id = movieLists[i].imdbID;
    movieListItem.classList.add("display_movie_list_item");

    let moviePoster;

    if (movieLists[i].Poster != "N/A") {
      moviePoster = movieLists[i].Poster;
    }
    else {
      moviePoster = noImage;
    }

    movieListItem.innerHTML = `
      <div class="movie_list_item_image">
          <img src="${moviePoster}">
      </div>

      <div class="movie_list_item_title">
          <h3>${movieLists[i].Title}</h3>
      </div>

      <div class="movie_list_item_year">
          <p>${movieLists[i].Year}</p>
      </div>
      `;

    displayMovieListContainer.appendChild(movieListItem);
  };

  getRandomMovieDetailsFromAPI();
};
