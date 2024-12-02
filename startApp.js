import infiniteSpinner from "./assets/images/infinite-spinner.svg";
import { getSearchResultMovieList } from "./getSearchResultMovieList.js";
import { getRandomMovieDataFromAPI } from "./getRandomMovieDataFromAPI.js";

export const startApp = () => {
  const mainContainer = document.getElementById("main");

  mainContainer.innerHTML = `
    <form class="search_form_control">
      <label for="search_input_box">Search by Movie Name:</label>
      
      <div class="search_input_container">
        <input id="search_input_box" type="text" placeholder="Search by Movie Name... Example: Thor" />
        <button id="clear_search">x</button>
      </div> 
    </form>

    <div class="search_result_dropdown_list"></div>

    <div class="loader_infinite_spinner">
      <img src="${infiniteSpinner}" alt="Infinite Spinner SVG">
    </div>

    <div id="displayMovies" class="display_movie_list_container"></div>
    <div id="movieDetails" class="search_result_container"></div>
    <div id="movieDetailsHistory" class="movie_details_history_container"></div>
    <div id="displayFavouritesMovies" class="display_favourites_movie_list_container"></div>

    <div>
      <button id="goToTop">Go to Top</button>
    </div>
  `;

  const searchInput = document.getElementById("search_input_box");
  const clearSearchInput = document.getElementById("clear_search");
  const searchResultDropdownList = document.querySelector(".search_result_dropdown_list");

  const displayMovieListContainer = document.querySelector(".display_movie_list_container");
  const searchResultContainer = document.querySelector(".search_result_container");
  const movieDetailsHistoryContainer = document.querySelector(".movie_details_history_container");
  const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");

  const searchFormControl = document.querySelector(".search_form_control");

  const goToTopButton = document.getElementById("goToTop");

  let searchInputValue;

  const hideElements = () => {
    displayMovieListContainer.classList.add("hide_element");
    movieDetailsHistoryContainer.classList.add("hide_element");
    displayFavouritesMovieListContainer.classList.add("hide_element");
  };

  hideElements();

  const showMovieList = () => {
    searchResultContainer.innerHTML = "";
    displayMovieListContainer.classList.remove("hide_element");
  };

  showMovieList();

  const searchMoviesList = () => {
    searchInputValue = (searchInput.value).trim();

    if (searchInputValue.length > 0) {
      searchResultDropdownList.classList.remove("hide_element");
      hideElements();
      getSearchResultMovieList(searchInputValue);
      return searchInputValue;
    }
  };

  const clearSearchInputField = () => {
    if (searchInputValue !== undefined && searchInputValue.length > 0) {
      searchInput.value = "";
      showMovieList();
    }
  };

  const scrollToTop = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goToTopButton.style.transition = "display 200ms ease-in-out";
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  };

  searchInput.addEventListener("keyup", () => {
    searchMoviesList();
  });

  clearSearchInput.addEventListener("click", (e) => {
    e.preventDefault();
    clearSearchInputField();
  });

  goToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener("click", (e) => {
    if (e.target.className != searchFormControl) {
      searchResultDropdownList.classList.add("hide_element");
    }
  });

  window.addEventListener("scroll", (e) => {
    scrollToTop();
    if (e.target !== e.currentTarget) return;
  });

  getRandomMovieDataFromAPI();
};
