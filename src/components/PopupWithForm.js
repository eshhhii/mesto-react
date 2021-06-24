import React from "react";
import "../index.css";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className={`popup__form popup__form_${props.name}`} name="form">
          <fieldset className="popup__fieldset">{props.children}</fieldset>
          <button type="submit" className="popup__save" onClick={props.onClose}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
