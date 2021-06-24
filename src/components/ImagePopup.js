import React from "react";
import "../index.css";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_images" ${
        props.selectedCard ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_image">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          alt={props.card.name}
          src={props.card.link}
        />
        <h3 className="popup__title popup__title_image">{props.card.name}</h3>
      </div>
    </section>
  );
}

export default ImagePopup;
