function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElements = document.querySelectorAll(".weather-app-city");
  
  
  cityElements.forEach(cityElement => {
    cityElement.textContent = searchInput.value;
  });
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
