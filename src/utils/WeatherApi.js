import { checkResponse } from "./Api";

const apiKey = "3f71e73ce2cd017bc02bfad723f4d270";

// NYC coordinates
const latitude = 40.7128;
const longitude = -74.0060;

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(checkResponse);
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weatherType = data.weather[0].main.toLowerCase();
  const placeName = data.name;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}°F`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}°C`,
    },
    weatherType: weatherType,
    placeName: placeName
  };
  return weather;
};
