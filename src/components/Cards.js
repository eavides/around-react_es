import React from "react";

function Cards({ title, image, count }) {
  return (
    <>
      <div className="grid__card">
        <button className="grid__card-delete"></button>
        <img className="grid__card-image" src={image} />
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
