import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        ref={nameRef}
        className="popup__input"
        id="placeName"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
      />
      <span className="popup__error" id="placeName-error"></span>
      <input
        ref={linkRef}
        className="popup__input"
        id="placeLink"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span className="popup__error" id="placeLink-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
