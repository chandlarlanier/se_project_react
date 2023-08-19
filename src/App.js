import logo from './logo.svg';
import './App.css';
import ItemModal from './ItemModal/ItemModal';

const App = () => {
  return (
    <div>
      <header className='header'>
        <ItemModal />
      </header>
    </div>
  );
}

export default App;
