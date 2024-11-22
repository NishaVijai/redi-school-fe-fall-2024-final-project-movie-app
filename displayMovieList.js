import noImage from "./assets/images/missingImage.svg";
import { getMovieDetails } from "./getMovieDetails.js";

export const displayMovieList = (movieLists) => {
  const searchResultDropdownList = document.querySelector(".search_result_dropdown_list");

  searchResultDropdownList.innerHTML = "";

  for (let i = 0; i < movieLists.length; i++) {
    let movieListItem = document.createElement("div");

    movieListItem.dataset.id = movieLists[i].imdbID;
    movieListItem.classList.add("search_movie_list_item");

    let moviePoster;

    if (movieLists[i].Poster != "N/A") {
      moviePoster = movieLists[i].Poster;
    }
    else {
      moviePoster = noImage;
    }

    movieListItem.innerHTML = `
      <div class="search_movie_list_item_thumbnail">
          <img src="${moviePoster}">
      </div>

      <div class="search_movie_list_item_title">
          <h3>${movieLists[i].Title}</h3>
      </div>

      <div class="search_movie_list_item_year">
          <p>${movieLists[i].Year}</p>
      </div>
      `;

    searchResultDropdownList.appendChild(movieListItem);
  };

  getMovieDetails();
};
