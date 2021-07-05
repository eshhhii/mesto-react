import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input"
        id="username"
        type="text"
        name="name"
        value={name}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        onChange={handleSubmit}
        required
      />
      <span className="popup__error" id="username-error"></span>
      <input
        className="popup__input"
        id="userjob"
        name="about"
        type="text"
        value={description}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        onChange={handleSubmit}
        required
      />
      <span className="popup__error" id="userjob-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
