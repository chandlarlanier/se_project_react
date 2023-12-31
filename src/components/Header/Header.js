import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ handleOpenModal, isLoggedIn, city }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR logo" />
        </Link>
        <div className="header__date">{currentDate}, {city}</div>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <div className="header__profile-section">
            <button
              className="header__button"
              type="text"
              onClick={() => {
                handleOpenModal("create");
              }}
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__name">
              {currentUser.name}
            </Link>
            <img
              className="header__avatar"
              src={currentUser.avatar}
              alt="User avatar"
            />
          </div>
        ) : (
          <div>
            <button
              className="header__sign-up-button"
              onClick={() => {
                handleOpenModal("register");
              }}
            >
              Sign Up
            </button>
            <button
              className="header__log-in-button"
              onClick={() => {
                handleOpenModal("login");
              }}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
