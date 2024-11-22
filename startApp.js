import { getMovieAPIdata } from "./getMovieAPIdata";

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

    <div class="search_result_container"></div>
  `;

  const searchInput = document.getElementById("search_input_box");
  const clearSearchInput = document.getElementById("clear_search");
  const searchResultDropdownList = document.querySelector(".search_result_dropdown_list");
  const searchFormControl = document.querySelector(".search_form_control");

  function searchMoviesList() {
    let searchInputValue = (searchInput.value).trim();

    if (searchInputValue.length > 0) {
      searchResultDropdownList.classList.remove("hide_search_result_dropdown_list");
      getMovieAPIdata(searchInputValue);
    }
    else {
      searchResultDropdownList.classList.add("hide_search_result_dropdown_list");
    }
  }

  const clearSearchInputField = () => {
    searchInput.value = "";
  };

  searchInput.addEventListener("keyup", () => {
    searchMoviesList();
  });

  clearSearchInput.addEventListener("click", () => {
    clearSearchInputField();
  });

  window.addEventListener("click", (e) => {
    if (e.target.className != searchFormControl) {
      searchResultDropdownList.classList.add("hide_search_result_dropdown_list");
    }
  });
};
