import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { getForecastWeather, parseWeatherData, getClothingItems } from "../../utils/Api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const App = () => {
  // getItems()
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddItem = (values) => {
    console.log(values);
  }

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getClothingItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Switch>
            <Route exact path="/">
              <Main weatherTemp={temp} onSelectCard={handleSelectedCard} clothingItems={clothingItems}/>
            </Route>
            <Route path="/profile">
              <Profile onSelectCard={handleSelectedCard} onCreateModal={handleCreateModal} clothingItems={clothingItems}/>
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && <AddItemModal handleCloseModal={handleCloseModal} onAddItem={onAddItem} isOpen={activeModal === 'create'}/>}
          {activeModal === "preview" && (
            <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
};

export default App;
