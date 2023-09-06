import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import Cards from "./Card.js";
//import "./App.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [isImage, setIsImage] = React.useState();
  const [isTitle, setIsTitle] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // const profileEdit = document.querySelector("#popup_profile");
    // profileEdit.classList.add("popup_opened");
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    // const avatarEdit = document.querySelector("#popup_editimage");
    // avatarEdit.classList.add("editimage_opened");
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // const newcardEdit = document.querySelector("#popup_newcard");
    // newcardEdit.classList.add("newcard_opened");
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(title, image, id) {
    setSelectedCard(true);
    //console.log(title);
    setIsImage(image);
    setIsTitle(title);
  }

  return (
    <>
      <div className="page">
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
            minlength="2"
            maxlength="200"
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
          link={isImage}
          title={isTitle}
          isOpen={selectedCard ? "imgdisplay_opened" : ""}
          onClose={closeAllPopups}
        ></ImagePopup>
      </div>
    </>
  );
}

export default App;
