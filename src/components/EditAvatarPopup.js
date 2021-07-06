import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      submitButton="Cохранить"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="popup__input popup__input_update"
        id="newAvatar"
        name="link-avatar"
        type="url"
        placeholder="Ссылка на новый аватар"
        required
      />
      <span className="popup__error" id="newAvatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
