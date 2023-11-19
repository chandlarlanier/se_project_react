import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi.js";
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  likeClothingItem,
  unlikeClothingItem,
} from "../../utils/api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { signUp, signIn, updateProfile, checkToken } from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { weatherOptions } from "../../utils/constants";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherType, setWeatherType] = useState("");
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherCardUrl, setWeatherCardUrl] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        checkToken(res.token).then((res) => {
          setCurrentUser({
            name: res.name,
            avatar: res.avatar,
            _id: res._id,
            email: res.email,
          });
          setIsLoggedIn(true);
        });
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = (userInfo) => {
    const { email, password } = userInfo;

    signUp(userInfo)
      .then((res) => {
        handleCloseModal();
        handleSignIn({ email, password });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("jwt");
  };

  const handleUpdateProfile = (updatedUserInfo) => {
    updateProfile(updatedUserInfo, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddItem = (cardData) => {
    addClothingItem(cardData, localStorage.getItem("jwt"))
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLikeButton = (cardId, isLiked) => {
    const jwt = localStorage.getItem("jwt");

    !isLiked
      ? likeClothingItem(cardId, jwt)
          .then((likedItem) => {
            setClothingItems((cards) =>
              cards.map((item) => {
                return item._id === cardId ? likedItem : item;
              })
            );
          })
          .catch((err) => console.error(err))
      : unlikeClothingItem(cardId, jwt)
          .then((unlikedItem) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === cardId ? unlikedItem : item))
            );
          })
          .catch((error) => console.error(error));
  };

  const handleToken = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleConfirmDelete = () => {
    deleteClothingItem(selectedCard._id, localStorage.getItem("jwt"))
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
    handleToken();
  }, [localStorage.getItem("jwt")]);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data).temperature;
        setTemp(temperature);

        const weatherType = parseWeatherData(data).weatherType;
        setWeatherType(weatherType);

        const isDay =
          Date.now() > data.sys.sunrise && Date.now() < data.sys.sunset;
        const weatherImageOption = weatherOptions.filter((item) => {
          return item.day == isDay && item.type == weatherType;
        })[0].url;
        setWeatherCardUrl(weatherImageOption);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getClothingItems()
      .then((items) => {
        setClothingItems(items.reverse());
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
          <CurrentUserContext.Provider value={{ currentUser }}>
            <Header handleOpenModal={handleOpenModal} isLoggedIn={isLoggedIn} />
            <Switch>
              <Route exact path="/">
                <Main
                  handleLikeButton={handleLikeButton}
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  isLoggedIn={isLoggedIn}
                  weatherType={weatherType}
                  weatherCardUrl={weatherCardUrl}
                />
              </Route>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Profile
                  isLoggedIn={isLoggedIn}
                  handleLikeButton={handleLikeButton}
                  onSelectCard={handleSelectedCard}
                  handleOpenModal={handleOpenModal}
                  clothingItems={clothingItems}
                  handleSignOut={handleSignOut}
                />
              </ProtectedRoute>
            </Switch>
            <Footer />
            {activeModal === "create" && (
              <AddItemModal
                onClose={handleCloseModal}
                onAddItem={handleAddItem}
                isOpen={activeModal === "create"}
              />
            )}
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                handleOpenModal={handleOpenModal}
                openConfirmDelete={() => {
                  handleOpenModal("delete");
                }}
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
                handleSignIn={handleSignIn}
                orButtonText="Or register"
                handleOrButton={() => {
                  handleOpenModal("register");
                }}
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                handleSignUp={handleSignUp}
                onClose={handleCloseModal}
                orButton={true}
                orButtonText="Or log in"
                handleOrButton={() => {
                  handleOpenModal("login");
                }}
              />
            )}
            {activeModal === "edit" && (
              <EditProfileModal
                onClose={handleCloseModal}
                handleUpdateProfile={handleUpdateProfile}
              />
            )}
          </CurrentUserContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
};

export default App;
