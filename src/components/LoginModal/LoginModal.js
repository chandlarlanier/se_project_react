import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({handleCloseModal}) => {
  return (
    <ModalWithForm title="Log in" buttonText="Log in" onClose={handleCloseModal}>
      <label className="form__input-label">
        Email
        <input
          required
          className="form__text-input"
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label className="form__input-label">
        Password
        <input
          required
          className="form__text-input"
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button className="login-form__or-button">Or Register</button>
    </ModalWithForm>
  );
};

export default LoginModal;
