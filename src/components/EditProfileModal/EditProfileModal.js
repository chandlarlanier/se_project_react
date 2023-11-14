import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ onClose }) => {
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      onClose={onClose}
    >
      <label className="form__input-label">
        Name
        <input
          required
          className="form__text-input"
          type="text"
          name="name"
          placeholder="Name"
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
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
