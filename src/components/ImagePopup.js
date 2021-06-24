import React from "react";
import "../index.css";

function ImagePopup() {
  return (
    <section className="popup popup_images">
      <div className="popup__container popup__container_image">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <img className="popup__image" alt="#" />
        <h3 className="popup__title popup__title_image"></h3>
      </div>
    </section>
  );
}

export default ImagePopup;
