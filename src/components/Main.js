import edit from "../images/Edit.svg";
import add from "../images/AddButton.svg";
import imgEdit from "../images/iconed.png";
import React, { useEffect } from "react";
import api from "../utils/api.js";
import Cards from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  });

  useEffect(() => {
    api.getCards().then((res) => {
      setCards(res);
      //console.log(res);
    });
  });

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__content">
          <img
            alt="Imagen de perfil"
            className="profile__image"
            src={userAvatar}
          />
          <img
            alt="Icono editar"
            className="profile__imageEdit"
            src={imgEdit}
            onClick={onEditAvatarClick}
          />
        </div>

        <div className="profile__information">
          <div id="infoGroup">
            <h1 className="profile__name">{userName}</h1>
            <h2 className="profile__position">{userDescription}</h2>
          </div>
          <div>
            <a href="#" className="profile__button">
              <img
                alt="Boton perfil"
                className="profile__edit"
                src={edit}
                onClick={onEditProfileClick}
              />
            </a>
          </div>
        </div>
        <a href="#" className="profile__add">
          <img
            alt="Boton agregar"
            class="profile__addImage"
            src={add}
            onClick={onAddPlaceClick}
          />
        </a>
      </section>
      <section className="grid">
        <div className="grid__container">
          {cards.map((item) => {
            //console.log(item);
            return (
              <Cards
                title={item.name}
                image={item.link}
                count={item.likes.length || 0}
                id={item._id}
                onCardC={onCardClick}
              ></Cards>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
