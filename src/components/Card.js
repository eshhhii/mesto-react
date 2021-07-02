import React from "react";
import { СurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(СurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__bin ${
    isOwn ? "element__bin" : "element__bin_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isOwn ? "element__like" : "element__like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        aria-label="Удалить"
      ></button>
      <div className="element__text">
        <p className="element__title">{card.name}</p>
        <div className="element__container">
          <button
            className={cardLikeButtonClassName}
            aria-label="Лайкнуть"
          ></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
