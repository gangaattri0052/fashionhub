import React from "react";

function Item({ name, rating, price, saleDiscount, image, brand }) {
  return (
    <div className="item-card">
      <img src={image} alt={image} width="100%" />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div className="item-price">${price}</div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;