import { checkResponse } from "./Api";

const apiKey = "3f71e73ce2cd017bc02bfad723f4d270";

const latitude = 41;
const longitude = -74;

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(checkResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}°F`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}°C`,
    },
  };
  return weather;
};
