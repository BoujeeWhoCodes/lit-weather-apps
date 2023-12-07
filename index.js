function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElements = document.querySelectorAll(".weather-app-city");
  
  // Assuming there might be multiple instances of city names
  cityElements.forEach(cityElement => {
    cityElement.textContent = searchInput.value;
  });
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
