import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({handleOpenModal}) => {
  const {currentUser} = useContext(CurrentUserContext); 
  console.log(currentUser);

  return (
    <div className="profile__side-bar">
      <div className='profile__info'>
        <img className="profile__avatar" src={currentUser.avatar} alt="User avatar" />
        <p className="profile__name">{currentUser.name}</p>
      </div>
      <div className='profile__buttons'>
        <button className="edit-profile-button" onClick={() => {handleOpenModal('edit')}}>Change profile data</button>
        <button className="log-out-button">Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
