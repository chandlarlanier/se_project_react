import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weatherCardUrl, weatherTemp = 999 }) => {
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
