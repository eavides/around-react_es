import React from "react";
import cerrar from "../images/Close.png";

function ImagePopup({ title, link, onClose }) {
  return (
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
