import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({
  onClose,
  orButton,
  orButtonText,
  handleOrButton,
  handleSignIn,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      onClose={onClose}
      orButton={orButton}
      orButtonText={orButtonText}
      handleOrButton={handleOrButton}
      onSubmit={handleSubmit}
    >
      <label className="form__input-label">
        Email
        <input
          required
          className="form__text-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
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
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
