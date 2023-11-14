import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({onClose, orButton, orButtonText}) => {
  return (
    <ModalWithForm title="Log in" buttonText="Log in" onClose={onClose} orButton={orButton} orButtonText={orButtonText}>
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
    </ModalWithForm>
  );
};

export default LoginModal;
