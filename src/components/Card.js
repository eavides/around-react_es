import React from "react";

function Card({ card, onCardC }) {
  function handleClick() {
    return onCardC(card);
  }
  return (
    <>
      <div className="grid__card">
        <button className="grid__card-delete"></button>
        <img
          className="grid__card-image"
          src={card.link}
          onClick={handleClick}
        />
        <div className="grid__card-description">
          <p className="grid__card-title">{card.name}</p>
          <div className="grid__card-group">
            <button className="grid__card-like"></button>
            <p className="grid__card-count">{card.likes.length || 0}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
