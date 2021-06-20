import React from "react";
import "../index.css";

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector(".popup_update").classList.add("popup_is-opened");
    document
      .querySelector(".profile__container")
      .addEventListener("click", handleEditAvatarClick);
  };
  const handleEditProfileClick = () => {
    document.querySelector(".popup_edit").classList.add("popup_is-opened");
    document
      .querySelector("profile__edit")
      .addEventListener("click", handleEditProfileClick);
  };
  const handleAddPlaceClick = () => {
    document.querySelector(".popup_add").classList.add("popup_is-opened");
    document
      .querySelector(".profile__add")
      .addEventListener("click", handleAddPlaceClick);
  };
  return (
    <div className="content">
      <div className="profile">
        <div className="profile__info">
          <div className="profile__container">
            <img className="profile__avatar" alt="Аватар" />
            <button
              type="button"
              className="profile__change"
              aria-label="Изменить аватар"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__text">
            <div className="profile__user">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                type="button"
                className="profile__edit"
                aria-label="Изменить профиль"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        />
      </div>
      <div className="elements">
        <ul className="elements__list"></ul>
      </div>
    </div>
  );
}

export default Main;
