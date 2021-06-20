import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup popup_edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="form">
            <fieldset className="popup__fieldset">
              <input
                className="popup__input"
                id="username"
                type="text"
                name="name"
                value=""
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__error" id="username-error"></span>
              <input
                className="popup__input"
                id="userjob"
                name="about"
                type="text"
                value=""
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__error" id="userjob-error"></span>
            </fieldset>
            <button type="submit" className="popup__save">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <h3 className="popup__title">Новое место</h3>
          <form
            className="popup__form popup__form_add"
            name="form"
            id="popupFormAdd"
          >
            <fieldset className="popup__fieldset">
              <input
                className="popup__input"
                id="placeName"
                name="name"
                type="text"
                value=""
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__error" id="placeName-error"></span>
              <input
                className="popup__input"
                id="placeLink"
                name="link"
                type="url"
                value=""
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error" id="placeLink-error"></span>
            </fieldset>
            <button type="submit" className="popup__save">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_update">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form
            className="popup__form popup__form_avatar"
            name="form"
            id="popupFormAvatar"
          >
            <fieldset className="popup__fieldset">
              <input
                className="popup__input popup__input_edit"
                id="newAvatar"
                name="link-avatar"
                type="url"
                value=""
                placeholder="Ссылка на новый аватар"
                required
              />
              <span className="popup__error" id="newAvatar-error"></span>
            </fieldset>
            <button type="submit" className="popup__save">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_images">
        <div className="popup__container popup__container_image">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <img className="popup__image" alt="#" />
          <h3 className="popup__title popup__title_image"></h3>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container">
          <form
            className="popup__form popup__form_delete"
            name="form"
            id="popupFormDelete"
          >
            <button
              type="button"
              className="popup__close"
              aria-label="Закрыть"
            ></button>
            <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
            <button type="submit" className="popup__save">
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
