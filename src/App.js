import './App.css';
import ItemModal from './ItemModal/ItemModal';

function App() {
  return (
    <div>
      <header className='header'>
        <div className='header__left'>
          <img className='header__logo' src='/images/logo.svg'/>
          <div className='header__date'>Date</div>
        </div>
        <div className='header__right'>
          <button className='header__button' type='text'>+ Add clothes</button>
          <div className='header__name'>Terrence Tegegne</div>
          <img className='header__avatar' src='/images/avatar.svg' />
        </div>
      </header>
    </div>
  );
}

export default App;
