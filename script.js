function fetchWeather() {
  const place = document.querySelector("#textBox").value;
  const appid = "6fa99e1f96f024f79970c5a3532b2ac6";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${appid}`
  )
    .then((res) => res.json())
    .then((data) => populateValue(data));
}

function populateValue(data) {
  let cityName = data.name;
  let temperature = data.main.temp;
  let windSpeed = data.wind.speed;
  let weatherType = data.weather[0].description;
  let latitude = data.coord.lat;
  let longitude = data.coord.lon;
  let icon = data.weather[0].icon;

  let result = document.querySelector(".content");
  let circleIcon = document.querySelector(".circle");

  symbol = `
  <img src="https://openweathermap.org/img/wn/${icon}.png"></img>
  `;

  circleIcon.innerHTML = symbol;

  html_data = `
  <ul>
  <li><strong>City Name: </strong>${cityName}</li>
  <li><strong>Temperature: </strong>${temperature}°C</li>
  <li><strong>Weather Type: </strong>${weatherType}</li>
  <li> <strong>Wind Speed: </strong>${windSpeed}</li>
  <li><strong>Lattitude: </strong>${latitude}</li>
  <li> <strong>Longitude: </strong>${longitude}</l>
</ul>
  `;

  result.innerHTML = html_data;
  let card = document.querySelector(".box");
  card.style.opacity = 1;
}
