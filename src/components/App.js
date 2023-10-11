import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(api.getUserInfo());

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  }

  function handleCardClick(card) {
    setIsImageOpen(true);
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          {console.log(currentUser)}
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
            name="profile"
            title="Editar Perfil"
            isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              id="name-input"
              name="name"
              className="form__input form__format"
              placeholder="Nombre"
              minLength="2"
              maxLength="40"
              required
            />

            <input
              type="text"
              id="position-input"
              name="about"
              className="form__input form__format"
              placeholder="Profesion"
              minLength="2"
              maxLength="200"
              required
            />
          </PopupWithForm>

          <PopupWithForm
            name="newcard"
            title="Nuevo Lugar"
            isOpen={isAddPlacePopupOpen ? "newcard_opened" : ""}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              id="title-input"
              name="name"
              className="form__input form__format"
              placeholder="Titulo"
              minLength="2"
              maxLength="30"
              required
            />
            <input
              type="url"
              id="url-input"
              name="link"
              className="form__input form__format"
              placeholder="Enlace de la Imagen"
              required
            />
          </PopupWithForm>

          <PopupWithForm
            name="editimage"
            title="Cambiar foto de perfil"
            isOpen={isEditAvatarPopupOpen ? "editimage_opened" : ""}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              id="img-input"
              name="link"
              className="form__input form__format"
              placeholder="Enlace de la Imagen"
              required
            />
          </PopupWithForm>

          <ImagePopup
            link={selectedCard.link}
            title={selectedCard.name}
            isOpen={isImageOpen ? "imgdisplay_opened" : ""}
            onClose={closeAllPopups}
          ></ImagePopup>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
