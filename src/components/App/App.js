import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
} from "../../utils/Api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { signUp, signIn } from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = ({ email, password }) => {
    const user = { email, password };

    signIn(user)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleSignUp = (userInfo) => {
    const { email, password } = userInfo;

    signUp(userInfo)
      .then((res) => {
        handleSignIn({ email, password });
        handleCloseModal();
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  }

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddItem = (values) => {
    const newItem = {
      name: values.name,
      imageUrl: values.link,
      weather: values.weather,
    };

    addClothingItem(newItem)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // const handleDeleteModal = () => {
  //   setActiveModal("delete");
  // };

  const handleConfirmDelete = () => {
    deleteClothingItem(selectedCard._id)
      .then(() => {
        const remainingClothingItems = clothingItems.filter((card) => {
          return selectedCard._id !== card._id;
        });
        setClothingItems(remainingClothingItems);
        handleCloseModal();
      })
      .catch(console.error);
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

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
      <div className="page">
        <div className="page__container">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            {/* <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}> */}
              <Header handleOpenModal={handleOpenModal}/>
              <Switch>
                <Route exact path="/">
                  <Main
                    weatherTemp={temp}
                    onSelectCard={handleSelectedCard}
                    clothingItems={clothingItems}
                  />
                </Route>
                <Route path="/profile">
                  <Profile
                    onSelectCard={handleSelectedCard}
                    handleOpenModal={handleOpenModal}
                    clothingItems={clothingItems}
                  />
                </Route>
              </Switch>
              <Footer />
              {activeModal === "create" && (
                <AddItemModal
                  onClose={handleCloseModal}
                  onAddItem={onAddItem}
                  isOpen={activeModal === "create"}
                />
              )}
              {activeModal === "preview" && (
                <ItemModal
                  selectedCard={selectedCard}
                  onClose={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              )}
              {activeModal === "delete" && (
                <ConfirmDeleteModal
                  onClose={handleCloseModal}
                  onConfirmDelete={handleConfirmDelete}
                />
              )}
              {activeModal === "login" && (
                <LoginModal
                  onClose={handleCloseModal}
                  orButton={true}
                  orButtonText="Or register"
                />
              )}
              {activeModal === "register" && (
                <RegisterModal
                  onClose={handleCloseModal}
                  orButton={true}
                  orButtonText="Or log in"
                />
              )}
              {activeModal === "edit" && (
                <EditProfileModal onClose={handleCloseModal} />
              )}
            {/* </CurrentUserContext.Provider> */}
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </div>
  );
};

export default App;
