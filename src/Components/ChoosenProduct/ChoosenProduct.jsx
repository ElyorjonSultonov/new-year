import React, { useState } from "react";
import "./ChoosenProduct.css";
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../../redux/ProductSlice";

function ChoosenProduct({ product }) {
  const { image, title, type, price, id } = product;
  const [son, setSon] = useState(0);
  const dispatch = useDispatch();
  const addPlus = () => {
    setSon(son + 1);
  };
  const divorceMinus = () => {
    if (son > 0) {
      setSon(son - 1);
    } else {
      setSon(son);
    }
  };
  const removeBtn = () => {
    dispatch(deleteFromBasket(id));
  };

  return (
    <div className="chosenProduct">
      <img src={image} alt="" />
      <div className="text">
        {/* /////////// */}
        <div className="top">
          <h1>{title}</h1>
          <button onClick={removeBtn}>x</button>
        </div>
        {/* /////////// */}
        <div className="shtuk">
          <h1>
            <span>В наличии:</span> 264 шт.
          </h1>
          <h1>
            <span>В наличии:</span> 264 шт.
          </h1>
        </div>
        {/* /////////// */}
        <div className="buttom">
          <div className="btns">
            <button onClick={divorceMinus}>-</button>
            <span>{son} шт </span>
            <button onClick={addPlus}>+</button>
          </div>
          <div className="right">
            <h1> 123 900₽/шт</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosenProduct;
