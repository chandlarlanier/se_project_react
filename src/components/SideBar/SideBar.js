import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="profile__side-bar">
      <img className="profile__avatar" src={avatar} alt="User avatar" />
      <p className="profile__name">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
