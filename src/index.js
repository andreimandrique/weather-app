import "./style.css";
import getWeather from "./getWeather";
import showInfo from "./showAllWeatherInfo";

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
        const {
          name,
          country,
          tz_id,
          localtime,
          temp_c,
          temp_f,
          text,
          icon,
          wind_kph,
          wind_dir,
          pressure_mb,
          precip_mm,
          humidity,
          cloud,
          uv,
          gust_kph,
        } = weatherData;
        showInfo(
          icon,
          text,
          temp_c,
          temp_f,
          name,
          country,
          tz_id,
          localtime,
          wind_kph,
          wind_dir,
          precip_mm,
          pressure_mb,
          humidity,
          cloud,
          uv,
          gust_kph
        );
      }
    })
    .catch((error) => {
      console.error("Unexpected error:", error);
    });
});
