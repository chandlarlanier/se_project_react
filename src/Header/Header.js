import './Header.css';

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

const Header = () => {
    console.log('Header');

    return (
        <header className='header'>
        <div className='header__left'>
          <img className='header__logo' src={require('../images/logo.svg').default}/>
          <div className='header__date'>{currentDate} - ***Location***</div>
        </div>
        <div className='header__right'>
          <button className='header__button' type='text'>+ Add clothes</button>
          <div className='header__name'>Terrence Tegegne</div>
          <img className='header__avatar' src={require('../images/avatar.svg').default} />
        </div>
      </header>
    )
}

export default Header;
   