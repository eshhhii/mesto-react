import React from "react";
import "../index.css";
import api from "../utils/Api";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });

    api.getInitialCards().then((cardList) => {
      setCards(cardList);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              style={{ backgroundImage: `url(${userAvatar})` }}
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
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        />
      </section>
      <div className="elements">
        <ul className="elements__list">
          {" "}
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
