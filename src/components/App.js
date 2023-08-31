import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
//import "./App.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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

  function handleCardClick() {
    setSelectedCard(true);
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

        <ImagePopup onClose={closeAllPopups}></ImagePopup>
      </div>

      {/* <div className="popup" id="popup">
        <div className="popup__container">
          <a href="#" className="popup__button">
            <img alt="cerrar" className="popup__buttonClose" src={cerrar} />
          </a>
          <form className="form" name="register" id="editProfile" noValidate>
            <h1 className="form__title">Edit Profile</h1>
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
            <span className="name-input-error form__name-error"></span>

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

            <span className="position-input-error form__position-error"></span>
            <button type="submit" id="save-submit" className="form__submit">
              Guardar
            </button>
          </form>
        </div>
      </div> 

      <div className="newcard" id="newcard">
        <div className="newcard__container">
          <a href="#" className="newcard__button">
            <img alt="cerrar" className="newcard__buttonClose" src={cerrar} />
          </a>
          <form className="form" name="register" id="addCard" novalidate>
            <h1 className="form__title">Nuevo Lugar</h1>
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
            <span class="title-input-error form__nameplace-error"></span>
            <input
              type="url"
              id="url-input"
              name="link"
              className="form__input form__format"
              placeholder="Enlace de la Imagen"
              required
            />
            <span className="url-input-error form__linkplace-error"></span>
            <button type="submit" id="save-card" className="form__submit">
              Crear
            </button>
          </form>
        </div>
      </div>

      <div className="confirmation" id="confirmation">
        <div className="confirmation__container">
          <a href="#" className="confirmation__button">
            <img
              alt="cerrar"
              className="confirmation__buttonClose"
              src={cerrar}
            />
          </a>
          <form
            className="form form_confirmation"
            name="confirm"
            id="delCard"
            noValidate
          >
            <h1 className="form__title">¿Estás Seguro?</h1>
            <button type="submit" id="delete" className="form__submit">
              Sí
            </button>
          </form>
        </div>
      </div>

      <div className="editimage" id="editimage">
        <div className="editimage__container">
          <a href="#" className="editimage__button">
            <img alt="cerrar" className="editimage__buttonClose" src={cerrar} />
          </a>
          <form className="form" name="register" id="editImage" novalidate>
            <h1 className="form__title">Cambiar foto de perfil</h1>
            <input
              type="url"
              id="img-input"
              name="link"
              className="form__input form__format"
              placeholder="Enlace de la Imagen"
              required
            />
            <span className="img-input-error form__linkplace-error"></span>
            <button type="submit" id="save-edit" className="form__submit">
              Guardar
            </button>
          </form>
        </div>
      </div>

      <div className="imgdisplay">
        <div className="imgdisplay__container">
          <div className="imgdisplay__container-card">
            <a href="#" className="imgdisplay__container-button">
              <img
                alt="cerrar"
                className="imgdisplay__container-buttonimg"
                src={cerrar}
              />
            </a>
            <img alt="Foto seleccionada" className="imgdisplay__image" />
            <h1 className="imgdisplay__title"></h1>
          </div>
        </div>
      </div>

      <template id="grid__template">
        <div className="grid__card">
          <button className="grid__card-delete"></button>
          <img className="grid__card-image" src="./images/Yosemite.jpg" />
          <div className="grid__card-description">
            <p className="grid__card-title"></p>
            <div className="grid__card-group">
              <button className="grid__card-like"></button>
              <p className="grid__card-count"></p>
            </div>
          </div>
        </div>
      </template>
      */}
    </>
  );
}

export default App;
