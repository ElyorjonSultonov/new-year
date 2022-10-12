import React from "react";
import "./Product.css";
import { addProduct } from "../../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { image, title, type, price, id } = product;
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddToBasket = () => {
    const check = products.some((item) => item.id === id);
    if (check) {
      alert(" Mahsulot savatga  qo'shilgan");
    } else {
      dispatch(addProduct(product));
    }
  };
  const goToDetail = () => {
    navigate(`/productDetail/${id}`);
  };
  return (
    <div className="product">
      <img onClick={goToDetail} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{type}</p>
      <div className="productPrice">
        <h1>{price}</h1>
        <button onClick={AddToBasket}>В корзину</button>
      </div>
    </div>
  );
}

export default Product;
