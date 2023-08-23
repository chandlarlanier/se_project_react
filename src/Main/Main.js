import { defaultClothingItems } from "../constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";


const Main = ({ weatherTemp, onSelectCard }) => {
    return (
        <main className='main'>
        <WeatherCard day={true} type='cloudy' weatherTemp={weatherTemp}/>
        <section className='card__section'>
          The temperature today is {weatherTemp} / You may want to wear:
          <div className='card__items'>
            {defaultClothingItems.map((item) => {
              return <ItemCard item={item} onSelectCard={onSelectCard} />
            })}
          </div>
        </section>
      </main>
    )
}

export default Main;
