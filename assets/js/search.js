let jsonPath = "/search.json";

SimpleJekyllSearch.init({
  searchInput: document.getElementById("search-input"),
  resultsContainer: document.getElementById("results-container"),
  dataSource: jsonPath,
  json: jsonPath,
  searchResultTemplate:
    '<li><a href="{url}" title="{desc}">{title}</a> {date}</li>',
  noResultsText: "No results found",
  limit: 5,
  fuzzy: false,
});

const overlay = document.querySelector(".overlay");
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("focus", ({ target }) => {
  target.classList.add("selected");
  target.parentElement.classList.add("selected");
  overlay.classList.add("enabled");
});
searchInput.addEventListener("blur", ({ target }) => {
  target.classList.remove("selected");
  target.parentElement.classList.remove("selected");
  overlay.classList.remove("enabled");
});
