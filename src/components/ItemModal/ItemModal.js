import "./ItemModal.css";
import closeIcon from "../../images/close-icon.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeIcon} alt="Close icon" />
        </button>
        <img
          src={selectedCard.imageUrl}
          className="modal__img"
          alt="Clothing item"
        />
        <div className="modal__item-info">
          <p className="modal__item-name">{selectedCard.name}</p>
          <p className="modal__item-weather">Weather: {selectedCard.weather}</p>
          <button className="modal__delete-button">Delete item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
