import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, handleOpenModal, clothingItems }) => {
  return (
    <div className="profile__container">
      <SideBar handleOpenModal={handleOpenModal}/>

      {/* On create modal needs to be changed to handle open modal? on open modal? */}
      <ClothesSection onSelectCard={onSelectCard} handleOpenModal={handleOpenModal} clothingItems={clothingItems}/>
    </div>
  );
};

export default Profile;
