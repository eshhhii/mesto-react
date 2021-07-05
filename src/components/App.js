import React from "react";
import api from "../utils/Api";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { СurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((cardList) => {
        setCurrentUser(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <СurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          {currentUser && (
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
          )}
          <Footer />
        </div>
        {currentUser && (
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
        )}
        <PopupWithForm
          name="add"
          title="Новое место"
          submitButton="Cохранить"
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
          submitButton="Cохранить"
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

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          submitButton="Да"
        ></PopupWithForm>
      </div>
    </СurrentUserContext.Provider>
  );
}

export default App;
