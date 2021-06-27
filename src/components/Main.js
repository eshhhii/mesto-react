import React from "react";
import api from "../utils/Api";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllData()
      .then((arg) => {
        const [dataUserInfo, dataCards] = arg;
        setUserName(dataUserInfo.name);
        setUserDescription(dataUserInfo.about);
        setUserAvatar(dataUserInfo.avatar);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={`${userAvatar}`}
              alt="Аватар"
            />
            <button
              type="button"
              className="profile__change"
              aria-label="Изменить аватар"
            ></button>
          </div>
          <div className="profile__text">
            <div className="profile__user">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit"
                aria-label="Изменить профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
