import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      name="add-clothing-item"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__input-label">
        Name
        <input
          required
          className="modal__text-input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__input-label">
        Image
        <input
          required
          className="modal__text-input"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <p className="modal__radio-button-heading">Select the weather type:</p>
      <div className="modal__radio-button-section" onChange={handleWeatherChange}>
        <div className="modal__radio-button">
          <input type="radio" id="hot" value="hot" name='weather' required/>
          <label>Hot</label>
        </div>
        <div className="modal__radio-button">
          <input type="radio" id="warm" value="warm" name='weather' required/>
          <label>Warm</label>
        </div>
        <div className="modal__radio-button">
          <input type="radio" id="cold" value="cold" name='weather' required/>
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
