import "./ConfirmDeleteModal.css";
import closeIcon from "../../images/close-icon-gray.svg";

const ConfirmDeleteModal = ({ onClose, selectedCard, onConfirmDelete }) => {
  return (
    <div className="confirm-delete__modal">
      <div className="confirm-delete__content">
        <button
          type="button"
          onClick={onClose}
          className="confirm-delete__close-button"
        >
          <img src={closeIcon} alt="Close icon" />
        </button>
        <p className="confirm-delete__warning">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="confirm-delete__delete-button"
          onClick={onConfirmDelete}
        >
          Yes, delete item
        </button>
        <button className="confirm-delete__cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
