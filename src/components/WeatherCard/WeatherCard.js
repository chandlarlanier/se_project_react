import React, { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ weatherCardUrl, weatherTemp = 999 }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="weather">
      <p className="weather__info">{weatherTemp}</p>
      <img
        className="weather__image"
        src={weatherCardUrl}
        alt="Weather graphic"
      />
    </div>
  );
};

export default WeatherCard;
