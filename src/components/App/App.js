import React, { useState, useEffect } from "react";
import "./App.css";
import { getForecastWeather, parseWeatherData } from "../../utils/Api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

const App = () => {
  const weatherTemp = 75;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div className='page'>
      <div className = 'page__container'>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal} name='add-clothing-item'>
          <label className='modal__input-label'>
            Name
            <input className='modal__text-input' type="text" name="name" minLength="1" maxLength="30" placeholder='Name'/>
          </label>
          <label className='modal__input-label'>
            Image
            <input className='modal__text-input' type="url" name="link" minLength="1" maxLength="30" placeholder='Image URL'/>
          </label>
          <p className='modal__radio-button-heading'>Select the weather type:</p>
          <div className='modal__radio-button-section'>
            <div className='modal__radio-button'>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div className='modal__radio-button'>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div className='modal__radio-button'>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
      </div>
    </div>
  );
};

export default App;
