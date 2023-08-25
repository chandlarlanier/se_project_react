import './WeatherCard.css';

const weatherOptions = [
    { url: require('../../images/day/day-clear.svg').default, day: true, type: 'sunny' },
    { url: require('../../images/day/day-cloudy.svg').default, day: true, type: 'cloudy' },
    { url: require('../../images/day/day-fog.svg').default, day: true, type: 'fog' },
    { url: require('../../images/day/day-rain.svg').default, day: true, type: 'rain' },
    { url: require('../../images/day/day-snow.svg').default, day: true, type: 'snow' },
    { url: require('../../images/day/day-storm.svg').default, day: true, type: 'storm' },
    { url: require('../../images/night/night-clear.svg').default, day: false, type: 'sunny' },
    { url: require('../../images/night/night-cloudy.svg').default, day: false, type: 'cloudy' },
    { url: require('../../images/night/night-fog.svg').default, day: false, type: 'fog' },
    { url: require('../../images/night/night-rain.svg').default, day: false, type: 'rain' },
    { url: require('../../images/night/night-snow.svg').default, day: false, type: 'snow' },
    { url: require('../../images/night/night-storm.svg').default, day: false, type: 'storm' }
    
]

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type;
    });

    const imageSrcUrl = imageSrc[0].url || '';

    return (
      <div className='weather'>
        <p className='weather__info'>{weatherTemp}°F</p>
        <img className='weather__image' src={imageSrcUrl} alt='Weather graphic'/>
      </div>
    );
}

export default WeatherCard;
