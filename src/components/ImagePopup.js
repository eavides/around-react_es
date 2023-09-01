import React from "react";
import cerrar from "../images/Close.png";

function ImagePopup({ title, link, key, isOpen, onClose }) {
  //console.log(isOpen);
  return (
    <div className={`imgdisplay ${isOpen}`}>
      <div className="imgdisplay__container">
        <div className="imgdisplay__container-card">
          <a href="#" className="imgdisplay__container-button">
            <img
              alt="cerrar"
              className="imgdisplay__container-buttonimg"
              src={cerrar}
              onClick={onClose}
            />
          </a>
          <img
            alt="Foto seleccionada"
            className="imgdisplay__image"
            src={link}
          />
          <h1 className="imgdisplay__title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
