async function getWeather(location) {
  try {
    const key = "dcd5f8afd5a14ab0ae2133049241506";
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`
    );
    const data = await response.json();
    const weatherData = {
      name: data.location.name,
      country: data.location.country,
      tz_id: data.location.tz_id,
      temp_c: `${data.current.temp_c} °C`,
      temp_f: `${data.current.temp_f} °F`,
      text: data.current.condition.text,
      icon: data.current.condition.icon,
      wind_kph: `${data.current.wind_kph} kph`,
      wind_dir: data.current.wind_dir,
      pressure_mb: `${data.current.pressure_mb} mb`,
      precip_mm: `${data.current.precip_mm} mm`,
      humidity: `${data.current.humidity} %`,
      cloud: `${data.current.cloud} %`,
      uv: data.current.uv,
      gust_kph: `${data.current.gust_kph} kph`,
    };
    return weatherData;
  } catch (error) {
    return { error };
  }
}

export default getWeather;
