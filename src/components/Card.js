import React from "react";

function Card({ card, onCardClick }) {
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
      <button className="element__bin" aria-label="Удалить"></button>
      <div className="element__text">
        <p className="element__title">{card.name}</p>
        <div className="element__container">
          <button className="element__like" aria-label="Лайкнуть"></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
