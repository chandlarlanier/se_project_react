import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, handleUpdateProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__input-label">
        Name
        <input
          required
          className="form__text-input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>
      <label className="form__input-label">
        Avatar
        <input
          required
          className="form__text-input"
          type="url"
          name="url"
          placeholder="URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
