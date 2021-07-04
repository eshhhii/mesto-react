import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { СurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = React.useContext(СurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardList) => {
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={`${currentUser.avatar}`}
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
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit"
                aria-label="Изменить профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
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
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
