const weatherIconPic = document.getElementById("weatherIcon");
const weatherMyText = document.getElementById("weatherMyText");
const tempCText = document.getElementById("tempC");
const tempFText = document.getElementById("tempF");
const cityNameText = document.getElementById("cityName");
const countryAndtzIdText = document.getElementById("countryAndtzId");
const localTimeText = document.getElementById("localTime");
const windKPHText = document.getElementById("windKPH");
const windDirText = document.getElementById("windDir");
const precipMMText = document.getElementById("precipMM");
const pressureMBText = document.getElementById("pressureMB");
const humidityText = document.getElementById("humidity");
const cloudText = document.getElementById("cloud");
const uvText = document.getElementById("uv");
const gustKPHText = document.getElementById("gustKPH");

function showInfo(
  weatherIcon,
  weatherText,
  tempC,
  tempF,
  cityName,
  country,
  tz_id,
  localTime,
  windKPH,
  windDir,
  precipMM,
  pressureMB,
  humidity,
  cloud,
  uv,
  gustKPH
) {
  weatherIconPic.src = weatherIcon;
  weatherMyText.textContent = weatherText;
  tempCText.textContent = tempC;
  tempFText.textContent = tempF;
  cityNameText.textContent = cityName;
  countryAndtzIdText.textContent = `${country} ${tz_id}`;
  localTimeText.textContent = localTime;
  windKPHText.textContent = windKPH;
  windDirText.textContent = windDir;
  precipMMText.textContent = precipMM;
  pressureMBText.textContent = pressureMB;
  humidityText.textContent = humidity;
  cloudText.textContent = cloud;
  uvText.textContent = uv;
  gustKPHText.textContent = gustKPH;
}

export default showInfo;
