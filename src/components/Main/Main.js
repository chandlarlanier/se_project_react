import { useMemo, useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

const Main = ({ weatherTemp, onSelectCard, clothingItems, handleLikeButton, isLoggedIn }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = useMemo(() => {
    const fahrenheitTemp = parseInt(weatherTemp?.temperature?.F);
    if (fahrenheitTemp >= 86) {
      return "hot";
    } else if (fahrenheitTemp >= 66 && fahrenheitTemp <= 85) {
      return "warm";
    } else if (fahrenheitTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  console.log(clothingItems);

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
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
