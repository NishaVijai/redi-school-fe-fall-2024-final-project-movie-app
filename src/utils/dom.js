// src/utils/dom.js
export const dom = {
  main: () => document.getElementById("main"),

  // 🔴 ADD THESE TWO
  mainTitle: () => document.querySelector("#main_title_section"),
  searchForm: () => document.querySelector(".search_form_control"),

  searchInput: () => document.getElementById("search_input_box"),
  clearSearchBtn: () => document.getElementById("clear_search"),

  movieList: () =>
    document.querySelector(".display_movie_list_container"),

  searchResults: () =>
    document.querySelector(".search_result_movies_container"),

  movieDetails: () =>
    document.querySelector(".movie_details_container"),

  movieDetailsHistory: () =>
    document.querySelector(".movie_details_history_container"),

  favourites: () =>
    document.querySelector(".display_favourites_movie_list_container"),

  recentDetails: () =>
    document.querySelector(".recent_movie_details_container"),

  goToTopBtn: () => document.getElementById("goToTop")
};
