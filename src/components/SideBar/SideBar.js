import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({handleOpenModal, handleSignOut}) => {
  const {currentUser} = useContext(CurrentUserContext); 
  console.log(currentUser);

  return (
    <div className="side-bar">
      <div className='side-bar__info'>
        <img className="side-bar__avatar" src={currentUser.avatar} alt="User avatar" />
        <p className="side-bar__name">{currentUser.name}</p>
      </div>
      <div className='side-bar__buttons'>
        <button className="side-bar__edit-profile-button" onClick={() => {handleOpenModal('edit')}}>Change profile data</button>
        <button className="side-bar__log-out-button" onClick={handleSignOut}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
