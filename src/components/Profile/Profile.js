import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile__container">
      <SideBar />
      <ClothesSection onSelectCard={onSelectCard} onCreateModal={onCreateModal} clothingItems={clothingItems}/>
    </div>
  );
};

export default Profile;
