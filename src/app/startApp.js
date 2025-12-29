// src/app/startApp.js
import infiniteSpinner from "../../public/assets/images/infinite-spinner.svg";
import { fetchMovieList } from "../services/movieApi.service.js";
import { dom } from "../utils/dom.js";
import { hide, show, toggleDisplay, scrollToTop } from "../utils/ui.js";

export const startApp = () => {
  renderLayout();
  setupInitialVisibility();
  bindEvents();
  loadInitialMovies();
};

/* ---------------- Render ---------------- */

const renderLayout = () => {
  dom.main().innerHTML += `
    <form class="search_form_control">
      <label for="search_input_box">Search by Movie Name:</label>
      <div class="search_input_container">
        <input
          id="search_input_box"
          type="text"
          placeholder="Search by Movie Name... Example: Thor"
        />
        <button id="clear_search">x</button>
      </div>
    </form>

    <div class="loader_infinite_spinner">
      <img src="${infiniteSpinner}" alt="Infinite Spinner SVG" />
    </div>

    <div class="display_movie_list_container"></div>
    <div class="search_result_movies_container"></div>

    <section class="recent_movie_details_container">
      <h2>Recent Movie Details</h2>
      <div class="display_recent_movie_details_list">
        <p class="recent_movie_details_list_empty_text">
          Recent Movie Details list is empty.
        </p>
      </div>
    </section>

    <section class="movie_details_history_container">
      <h2>Movie Details History</h2>
      <div class="display_movie_details_history_list">
        <p class="display_movie_details_history_list_empty_text">
          Movie Details History list is empty.
        </p>
      </div>
    </section>

    <section class="display_favourites_movie_list_container">
      <h2>Favourite Movie List</h2>
      <div class="display_favourite_movie_lists">
        <p class="favorite_movie_list_empty_text">
          Favourite Movie list is empty.
        </p>
      </div>
    </section>

    <div class="movie_details_container"></div>

    <button id="goToTop">Scroll to Top</button>
  `;
};

/* ---------------- State ---------------- */

let searchInputValue = "";

/* ---------------- Visibility ---------------- */

const setupInitialVisibility = () => {
  hide(
    dom.movieDetailsHistory(),
    dom.favourites(),
    dom.searchResults()
  );
};

/* ---------------- Events ---------------- */

const bindEvents = () => {
  dom.searchInput().addEventListener("keyup", onSearch);
  dom.clearSearchBtn().addEventListener("click", onClearSearch);
  dom.goToTopBtn().addEventListener("click", scrollToTop);
  window.addEventListener("scroll", onScroll);
};

/* ---------------- Handlers ---------------- */

const onSearch = () => {
  searchInputValue = dom.searchInput().value.trim();
  if (!searchInputValue) return;

  dom.movieDetails().innerHTML = "";

  hide(dom.movieList());
  show(dom.searchResults());
  hide(dom.movieDetailsHistory(), dom.favourites());

  fetchMovieList(
    searchInputValue,
    dom.searchResults(),
    dom.searchResults()
  );
};

const onClearSearch = (e) => {
  e.preventDefault();
  if (!searchInputValue) return;

  dom.searchInput().value = "";
  searchInputValue = "";
  dom.movieDetails().innerHTML = "";

  show(dom.movieList());
  hide(dom.searchResults());
};

const onScroll = () => {
  toggleDisplay(
    dom.goToTopBtn(),
    document.documentElement.scrollTop > 130
  );
};

/* ---------------- Data ---------------- */

const loadInitialMovies = () => {
  fetchMovieList(
    "Avengers",
    dom.movieList(),
    dom.movieList()
  );
};
