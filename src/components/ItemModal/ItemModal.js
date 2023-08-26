import "./ItemModal.css";
import closeIcon from "../../images/close-icon.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" onClick={onClose} class="modal__close-button">
          <img src={closeIcon} alt="Close icon" />
        </button>
        <img
          src={selectedCard.link}
          className="modal__img"
          alt="Clothing item"
        />
        <p className="modal__item-name">{selectedCard.name}</p>
        <div className="modal__item-weather">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
