import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useState } from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
const [loggedIn, setLogin] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR logo" />
        </Link>
        <div className="header__date">{currentDate}, New York</div>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        { loggedIn ? <> <button className="header__button" type="text" onClick={onCreateModal}>
          + Add clothes
        </button>
        <Link to="/profile" className="header__name">
          Terrence Tegegne
        </Link>
        <img className="header__avatar" src={avatar} alt="User avatar" /> </> : <> <button className="header__sign-up-button">Sign Up</button>
        <button className="header__log-in-button">Log in</button> </>}
        {/* User section end */}
      </div>
    </header>
  );
};

export default Header;
