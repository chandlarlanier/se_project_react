import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({onClose, orButton, orButtonText, handleOrButton}) => {
    return (
        <ModalWithForm title="Sign up" buttonText="Next" onClose={onClose} orButton={orButton} orButtonText={orButtonText} handleOrButton={handleOrButton}>
      <label className="form__input-label">
        Email*
        <input
          required
          className="form__text-input"
          type="email"
          name="email"
          placeholder="Email"
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
        />
      </label>
      <label className='form__input-label'>
        Name
        <input required className="form__text-input" type="text" name="name" placeholder="Name"/>
      </label>
      <label className='form__input-label'>
        Avatar URL
        <input required className="form__text-input" type="url" name="url" placeholder="Avatar URL"/>
      </label>
    </ModalWithForm>
    )
}

export default RegisterModal;
