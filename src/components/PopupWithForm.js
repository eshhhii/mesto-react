import React from "react";
import "../index.css";

function PopupWithForm(props) {
  return (
    <div className="`popup popup_${props.name}`">
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="`popup__form popup__form_${props.name}`" name="form">
          <fieldset className="popup__fieldset">
            <input
              className="popup__input"
              id=""
              type="text"
              name=""
              value=""
              placeholder=""
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error" id="username-error"></span>
            <input
              className="popup__input"
              id=""
              name=""
              type="text"
              value=""
              placeholder=""
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error" id=""></span>
          </fieldset>
          <button type="submit" className="popup__save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
