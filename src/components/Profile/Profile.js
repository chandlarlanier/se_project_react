import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({
  onSelectCard,
  handleOpenModal,
  clothingItems,
  handleSignOut,
  isLoggedIn,
  handleLikeButton,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const ownerClothingItems = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });

  return (
    <div className="profile__container">
      <SideBar
        handleOpenModal={handleOpenModal}
        handleSignOut={handleSignOut}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        handleOpenModal={handleOpenModal}
        clothingItems={ownerClothingItems}
        handleLikeButton={handleLikeButton}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
