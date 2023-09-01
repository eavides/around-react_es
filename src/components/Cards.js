import React from "react";

function Cards({ title, image, count, id, onCardC }) {
  function handleClick() {
    return onCardC(title, image, count, id);
  }
  return (
    <>
      <div className="grid__card">
        <button className="grid__card-delete"></button>
        <img className="grid__card-image" src={image} onClick={handleClick} />
        <div className="grid__card-description">
          <p className="grid__card-title">{title}</p>
          <div className="grid__card-group">
            <button className="grid__card-like"></button>
            <p className="grid__card-count">{count}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
