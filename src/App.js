import './App.css';
import Header from './Header/Header';
import WeatherCard from './WeatherCard/WeatherCard';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <WeatherCard />
      </main>
    </div>
  );
}

export default App;
