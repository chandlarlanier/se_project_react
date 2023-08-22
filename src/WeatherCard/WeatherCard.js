import './WeatherCard.css';

const WeatherCard = () => {
    console.log('WeatherCard');

    return (
      <div>
        <section className='weather' id='weather'>
          <div className='weather__info'>75F</div>
          <img className='weather__image' src='/images/day/day-clear.svg' />
        </section>
        <section id='card-section'>
          cards
        </section>
      </div>
    );
}

export default WeatherCard;
