import './App.css';
import Header from './Header/Header';
import WeatherCard from './WeatherCard/WeatherCard';
import ItemCard from './ItemCard/ItemCard';
import Main from './Main/Main';



function App() {
  const weatherTemp = '75°F';

  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <footer className='footer'>
        <div>
          Developed by Chandlar Lanier
        </div>
        <div>
          2023
        </div>
      </footer>
    </div>
  );
}

export default App;
