import "../index.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main>
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClose={closeAllPopups}
        </Main>
        <Footer />
      </div>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditPopupOpen}
      >
        <input
          className="popup__input"
          id="username"
          type="text"
          name="name"
          value=""
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error" id="username-error"></span>
        <input
          className="popup__input"
          id="userjob"
          name="about"
          type="text"
          value=""
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error" id="userjob-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="placeName"
          name="name"
          type="text"
          value=""
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error" id="placeName-error"></span>
        <input
          className="popup__input"
          id="placeLink"
          name="link"
          type="url"
          value=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="placeLink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="update"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_update"
          id="newAvatar"
          name="link-avatar"
          type="url"
          value=""
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="popup__error" id="newAvatar-error"></span>
      </PopupWithForm>

      <ImagePopup />

      <PopupWithForm name="delete" title="Вы уверены?">
        <button type="submit" className="popup__save">
          Да
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;
