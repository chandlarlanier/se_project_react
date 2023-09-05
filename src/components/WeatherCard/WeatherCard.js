import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weather">
      <p className="weather__info">{weatherTemp}</p>
      <img className="weather__image" src={imageSrcUrl} alt="Weather graphic" />
    </div>
  );
};

export default WeatherCard;
