import "./style.css";
import getWeather from "./getWeather";

const weatherIcon = document.getElementById("weatherIcon");

const inputWeather = document.getElementById("inputWeather");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let data = getWeather(inputWeather.value);
  data
    .then((weatherData) => {
      if (weatherData.error) {
        console.log("Location not found");
      } else {
        console.log(weatherData);
        weatherIcon.src = weatherData.icon;
      }
    })
    .catch((error) => {
      console.error("Unexpected error:", error);
    });
});
