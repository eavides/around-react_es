import cerrar from "../images/Close.png";
function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <>
      <div className={`popup popup_type_${name} ${isOpen}`} id="popup">
        <div className="popup__container">
          <a href="#" className="popup__button">
            <img
              alt="cerrar"
              className="popup__buttonClose"
              src={cerrar}
              onClick={onClose}
            />
          </a>

          <form className="form" name="register" id="form" noValidate>
            <h1 className="form__title">{title}</h1>
            {children}
            <button type="submit" id="save-submit" className="form__submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
