import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = ({handleOpenModal}) => {
  return (
    <div className="profile__side-bar">
      <div className='profile__info'>
        <img className="profile__avatar" src={avatar} alt="User avatar" />
        <p className="profile__name">Terrence Tegegne</p>
      </div>
      <div className='profile__buttons'>
        <button className="edit-profile-button" onClick={() => {handleOpenModal('edit')}}>Change profile data</button>
        <button className="log-out-button">Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
