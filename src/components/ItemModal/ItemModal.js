import "./ItemModal.css";
import closeIcon from "../../images/close-icon.svg";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
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
          <button className="preview-item__delete-button" onClick={onDelete}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
