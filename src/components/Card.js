import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button className="element__bin" aria-label="Удалить"></button>
      <div className="element__text">
        <p className="element__title">{props.card.name}</p>
        <div className="element__container">
          <button className="element__like" aria-label="Лайкнуть"></button>
          <p className="element__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
