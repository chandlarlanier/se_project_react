import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, handleOpenModal, clothingItems, handleSignOut, isLoggedIn, handleLikeButton }) => {
  return (
    <div className="profile__container">
      <SideBar handleOpenModal={handleOpenModal} handleSignOut={handleSignOut}/>
      <ClothesSection onSelectCard={onSelectCard} handleOpenModal={handleOpenModal} clothingItems={clothingItems} handleLikeButton={handleLikeButton} isLoggedIn={isLoggedIn}/>
    </div>
  );
};

export default Profile;
