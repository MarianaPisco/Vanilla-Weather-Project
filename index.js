//get date
let getDate = document.querySelector("#changeDate");
let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekdays[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  getDate.innerHTML = `${day}, ${hour}:0${minutes}`;
} else {
  getDate.innerHTML = `${day}, ${hour}:${minutes}`;
}

//search engine

let search = document.querySelector("#search-sinal");
let apiKey = "b01b330012699bdf6ed530375ada87c3";
let getFahrenheit = document.querySelector("#fahrenheit");
let getCelsius = document.querySelector("#celsius");

search.addEventListener("click", searchCity);

function searchCity(event) {
  event.preventDefault();
  let chosenCity = document.querySelector("#input-box");
  let apiKey = "b01b330012699bdf6ed530375ada87c3";
  let defaultCity = document.querySelector(".city");
  defaultCity.innerHTML = chosenCity.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}

function showWeather(response) {
  let temperature = document.querySelector("#temp");
  let temp = Math.round(response.data.main.temp);
  temperature.innerHTML = temp;
  let defaultCity = document.querySelector(".city");
  defaultCity.innerHTML = response.data.name;

  let description = document.querySelector(".description");
  let windElement = document.querySelector(".wind");
  let iconElement = document.querySelector(".icon");

  celsiusTemperature = response.data.main.temp;

  description.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let iconElementAPI = response.data.weather[0].icon;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconElementAPI}@2x.png`
  );
}

function Fahrenheit(event) {
  event.preventDefault();

  let currentTemp = document.querySelector("#temp");
  celsius.classList.remove("activ");
  fahrenheit.classList.add("activ");
  currentTemp.innerHTML = Math.round(celsiusTemp * 1.8 + 32);
  let degree = document.querySelector(".degrees");
  degree.innerHTML = "ºF";
}

function Celsius(event) {
  event.preventDefault();

  let currentTemp = document.querySelector("#temp");
  celsius.classList.add("activ");
  fahrenheit.classList.remove("activ");
  currentTemp.innerHTML = Math.round(celsiusTemp);
  let degree = document.querySelector(".degrees");
  degree.innerHTML = "ºC";
}

let celsiusTemp = null;

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", Fahrenheit);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", Celsius);

cityButton = document.querySelector("#city-button");
cityButton.addEventListener("click", changeCity);
