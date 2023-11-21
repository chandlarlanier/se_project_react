import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  handleOpenModal,
  clothingItems,
  handleLikeButton,
}) => {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__heading">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          className="clothes-section__add-button"
          onClick={() => {
            handleOpenModal("create");
          }}
        >
          + Add New
        </button>
      </div>
      <div className="clothes-section__card-items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              handleLikeButton={handleLikeButton}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
