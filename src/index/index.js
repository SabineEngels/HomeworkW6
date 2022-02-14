// set time

let now = new Date();
let h5 = document.querySelector("h5");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h5.innerHTML = `${day}, ${hours}:${minutes}`;

// change h1 (city name)

function search(event) {
  event.preventDefault();
  city = document.getElementById("searching").value;
   let Sydney = document.getElementById("cityName");
  if (city) {
    Sydney.innerHTML = `${city}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperatureByCity);
  } else {
    Sydney.innerHTML = "Search city";
    alert("Please enter a city");
  }
}



let form = document.getElementById("searchForm");
form.addEventListener("submit", search);


let apiKey = "cd64fb260d830f5a9d386340ed6a2906";
let city = "";



function showTemperatureByCity(response) {
   let temperature = Math.round(response.data.main.temp);
   let temperatureElement = document.querySelector("#temperatureCity");
   let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
 
  }

  



function showPositionCurrent(position) {
   let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperatureCurrent);
}

function showTemperatureCurrent(response) {
  let changeh3 = document.querySelector("h3");
   changeh3.innerHTML = ` ${Math.round(response.data.main.temp)}°c in ${
    response.data.name
  }`;
}

function buttonClick() {
  navigator.geolocation.getCurrentPosition(showPositionCurrent);

}

let clickButton = document.querySelector(".button_currentCity");
clickButton.addEventListener("click", buttonClick);