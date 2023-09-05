import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="WTWR logo" />
        <div className="header__date">{currentDate}, New York</div>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        <button className="header__button" type="text" onClick={onCreateModal}>
          + Add clothes
        </button>
        <div className="header__name">Terrence Tegegne</div>
        <img className="header__avatar" src={avatar} alt="User avatar" />
      </div>
    </header>
  );
};

export default Header;
