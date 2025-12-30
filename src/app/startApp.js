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

    <section class="display_default_movie_list_container">
      <h2>Default Movie List</h2>
      <div class="display_movie_list_container"></div>
    </section>

    <section class="display_search_result_movie_list_container">
      <h2>Search Result</h2>
      <div class="search_result_movies_container"></div>
    </section>

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

    <section class="display_movie_details_container">
      <h2>Display Movie Details</h2>
      <div class="movie_details_container">
        <p class="movie_details_container_empty_text">
          Please click on a movie to read more...
        </p>
      </div>
    </section>

    <button id="goToTop">Scroll to Top</button>
  `;
};

/* ---------------- State ---------------- */

let searchInputValue = "";

/* ---------------- Visibility ---------------- */

const setupInitialVisibility = () => {
  hide(
    dom.recentDetails(),
    dom.movieDetailsHistory(),
    dom.favourites(),
    dom.searchResultsSection()
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

  // Clear previous movie details but keep the empty state message
  const emptyText = dom.movieDetails()?.querySelector(".movie_details_container_empty_text");
  dom.movieDetails().innerHTML = "";
  if (emptyText) {
    dom.movieDetails().appendChild(emptyText);
  }

  hide(dom.defaultMovieListSection());
  show(dom.searchResultsSection(), dom.movieDetailsSection());
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

  // Clear movie details but restore the empty state message
  const emptyText = dom.movieDetails()?.querySelector(".movie_details_container_empty_text");
  dom.movieDetails().innerHTML = "";
  if (emptyText) {
    dom.movieDetails().appendChild(emptyText);
  } else {
    // If it doesn't exist, recreate it
    const p = document.createElement("p");
    p.className = "movie_details_container_empty_text";
    p.textContent = "Please click on a movie to read more...";
    dom.movieDetails().appendChild(p);
  }

  show(dom.defaultMovieListSection());
  hide(dom.searchResultsSection());
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
