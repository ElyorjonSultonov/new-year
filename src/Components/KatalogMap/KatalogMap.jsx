import React from "react";
import "./KatalogMap.css";

function KatalogMap({ image, title, type, price }) {
  return (
    <div>
      <div className="product_sale">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{type}</p>
        <div className="price">
          <h1>{price}</h1>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default KatalogMap;
