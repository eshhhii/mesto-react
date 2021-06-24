import React from "react";

function Card(props) {
  return (
    <li className="element">
      <img
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
      />
      <button className="element__bin" aria-label="Удалить"></button>
      <div className="element__text">
        <p className="element__title">{props.card.name}</p>
        <div className="element__container">
          <button className="element__like" aria-label="Лайкнуть"></button>
          <p className="element__counter">{props.card.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
