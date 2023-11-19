import { useMemo, useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

const Main = ({ weatherCardUrl, weatherTemp, onSelectCard, clothingItems, handleLikeButton, isLoggedIn }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.[currentTemperatureUnit] || 999;

  const weatherHeatType = useMemo(() => {
    const fahrenheitTemp = parseInt(weatherTemp?.F);
    if (fahrenheitTemp >= 86) {
      return "hot";
    } else if (fahrenheitTemp >= 66 && fahrenheitTemp <= 85) {
      return "warm";
    } else if (fahrenheitTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherHeatType;
  });

  return (
    <main className="main">
      <WeatherCard weatherCardUrl={weatherCardUrl} weatherTemp={temp}/>
      <section className="card-section">
        The temperature today is {temp} / You may want to wear:
        <div className="card-items__container">
          <div className="card-items">
            {filteredCards.map((item) => {
              return (
                <ItemCard
                  item={item}
                  onSelectCard={onSelectCard}
                  key={item._id}
                  handleLikeButton={handleLikeButton}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
