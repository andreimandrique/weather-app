import getWeather from "./getWeather";

const inputWeather = document.getElementById("inputWeather");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let weatherData = getWeather(inputWeather.value);
  weatherData
    .then((message) => {
      if (message.error) {
        console.log("Location not found");
      } else {
        console.log("Weather:", message);
      }
    })
    .catch((error) => {
      console.error("Unexpected error:", error);
    });
});
