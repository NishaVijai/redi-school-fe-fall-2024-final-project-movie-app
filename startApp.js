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

    <div id="displayMovies" class="display_movie_list_container"></div>

    <div id="movieDetails" class="search_result_container"></div>
  `;

  const searchInput = document.getElementById("search_input_box");
  const clearSearchInput = document.getElementById("clear_search");
  const searchResultDropdownList = document.querySelector(".search_result_dropdown_list");
  const displayMovieListContainer = document.querySelector(".display_movie_list_container");
  const searchResultContainer = document.querySelector(".search_result_container");
  const searchFormControl = document.querySelector(".search_form_control");

  let searchInputValue;

  const hideElements = () => {
    searchResultContainer.innerHTML = "";
    searchResultContainer.classList.add("hide_search_result_dropdown_list");
  };

  const showElements = () => {
    searchResultContainer.innerHTML = "";
    displayMovieListContainer.classList.remove("hide_search_result_dropdown_list");
  };

  const searchMoviesList = () => {
    searchInputValue = (searchInput.value).trim();

    if (searchInputValue.length > 0) {
      searchResultDropdownList.classList.remove("hide_search_result_dropdown_list");
      displayMovieListContainer.classList.add("hide_search_result_dropdown_list");
      searchResultContainer.classList.add("hide_search_result_dropdown_list");
      getSearchResultMovieList(searchInputValue);
      return searchInputValue;
    }
  };

  const clearSearchInputField = () => {
    if (searchInputValue.length > 0) {
      searchInput.value = "";
      // hideElements();
      showElements();
    }
  };

  searchInput.addEventListener("keyup", () => {
    searchMoviesList();
  });

  clearSearchInput.addEventListener("click", (e) => {
    e.preventDefault();
    clearSearchInputField();
  });

  window.addEventListener("click", (e) => {
    if (e.target.className != searchFormControl) {
      searchResultDropdownList.classList.add("hide_search_result_dropdown_list");
    }
  });

  getRandomMovieDataFromAPI();
};
