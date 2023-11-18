import "./ItemModal.css";
import closeIcon from "../../images/close-icon.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, openConfirmDelete }) => {
  const {currentUser} = useContext(CurrentUserContext);
  const isOwn = currentUser._id == selectedCard.owner;
  console.log(currentUser);
  console.log(selectedCard);

  return (
    <div className="preview-item__modal">
      <div className="preview-item__content">
        <button
          type="button"
          onClick={onClose}
          className="preview-item__close-button"
        >
          <img src={closeIcon} alt="Close icon" />
        </button>
        <img
          src={selectedCard.imageUrl}
          className="preview-item__img"
          alt="Clothing item"
        />
        <div className="preview-item__item-info">
          <p className="preview-item__item-name">{selectedCard.name}</p>
          <p className="preview-item__item-weather">
            Weather: {selectedCard.weather}
          </p>
          {isOwn ? (
            <button className="preview-item__delete-button" onClick={openConfirmDelete}>
              Delete item
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
