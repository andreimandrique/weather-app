import "./style.css";
import defaultWeather from "./defaultWeather.png";
import getWeather from "./getWeather";
import showInfo from "./showInfo";
import { format } from "date-fns/format";

const inputWeather = document.getElementById("inputWeather");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let data = getWeather(inputWeather.value);
  data
    .then((weatherData) => {
      if (weatherData.error) {
        console.log("Location not found");
        alert("Location not found");
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

        const myDate = format(localtime, "p eeee PPP");

        showInfo(
          icon,
          text,
          temp_c,
          temp_f,
          name,
          country,
          tz_id,
          myDate,
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

document.getElementById("weatherIcon").src = defaultWeather;
