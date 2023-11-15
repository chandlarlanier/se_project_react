import "./ModalWithForm.css";
import grayCloseIcon from "../../images/close-icon-gray.svg";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  orButton,
  orButtonText,
  handleOrButton
}) => {
  return (
    <div className="form__modal">
      <div className="form__content">
        <button
          className="form__close-button_gray"
          type="button"
          onClick={onClose}
        >
          <img src={grayCloseIcon} alt="Close icon" />
        </button>
        <h3 className="form__title">{title}</h3>
        <form onSubmit={onSubmit} className="form__children">
          {children}
          <button className="form__submit-button" type="submit">
            {buttonText}
          </button>
          {{orButton} ? <button className="form__or-button" onClick={handleOrButton}>{orButtonText}</button> : null}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
