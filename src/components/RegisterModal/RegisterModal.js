import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  handleSignUp,
  onClose,
  orButton,
  orButtonText,
  handleOrButton,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      title="Sign up"
      buttonText="Next"
      onClose={onClose}
      orButton={orButton}
      orButtonText={orButtonText}
      handleOrButton={handleOrButton}
    >
      <label className="form__input-label">
        Email*
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
        Password*
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
      <label className="form__input-label">
        Name
        <input
          required
          className="form__text-input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className="form__input-label">
        Avatar URL
        <input
          required
          className="form__text-input"
          type="url"
          name="url"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
