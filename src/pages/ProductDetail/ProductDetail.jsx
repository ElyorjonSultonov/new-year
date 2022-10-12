import React, { useState } from "react";
import "./ProductDetail.css";
import Detail_1 from "../../assets/image/detail1.png";
import Product from "../../Components/Product/Product";

import Vector from "../../assets/image/Vector.png";
import Group from "../../assets/image/Group 55791.png";
import korzina from "../../assets/image/korzina.png";
import tochka from "../../assets/image/tochka.png";
import info from "../../assets/image/info.png";
import comp from "../../assets/image/Component 108.png";
import gruz from "../../assets/image/gruz.png";
import visa from "../../assets/image/visa-mastercard 1.png";
import visa2 from "../../assets/image/visa-mastercard-mir 1.png";
import paypal from "../../assets/image/paypal 1.png";
import tink from "../../assets/image/tinkoff 1.png";
import sber from "../../assets/image/sberbank 1.png";
import yandex from "../../assets/image/yandexmoney 1.png";
import { Data } from "../../Components/data/data";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFlip } from "swiper";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductDetail() {
  const [son, setSon] = useState(0);
  const DetailMap = Data.filter((item) => item.category === "Sale");
  const addPlus = () => {
    setSon(son + 1);
  };
  const subtractionMinus = () => {
    if (son > 0) {
      setSon(son - 1);
    } else {
      setSon(son);
    }
  };
  return (
    <div className="productDetail">
      <div className="container">
        <h1>Домик Matteo Classic</h1>
        <div className="productDetailslider">
          <div className="detalSlider">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                244: {
                  width: 276,
                  slidesPerView: 1,
                },
                376: {
                  width: 376,
                  slidesPerView: 1,
                },
                576: {
                  width: 576,
                  slidesPerView: 2,
                },
                744: {
                  width: 744,
                  slidesPerView: 2,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Detail_1} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="sum">
            <div className="image2">
              <div className="money">
                <div className="price">
                  <h1>365 ₽/шт</h1>
                  <p>430 руб</p>
                  <img src={comp} alt="" />
                </div>
                <b>
                  В наличии: <span>264 шт.</span>
                </b>
              </div>
              <div className="cm">
                <h1>Выберите размер</h1>
                <div className="sm">
                  <b>20,5 см</b>
                  <b>20,5 см</b>
                  <b>20,5 см</b>
                  <b>20,5 см</b>
                  <b>20,5 см</b>
                </div>
              </div>
              <div className="minuspl">
                <h1>
                  Выберите количество <img src={korzina} alt="" />
                </h1>
                <div className="btns">
                  <button onClick={subtractionMinus}>-</button>
                  <span>{son}</span>
                  <button onClick={addPlus}>+</button>
                </div>
              </div>
              <button className="basket">
                В корзину
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 24C11.3284 24 12 23.3284 12 22.5C12 21.6716 11.3284 21 10.5 21C9.67157 21 9 21.6716 9 22.5C9 23.3284 9.67157 24 10.5 24Z"
                    stroke="#222222"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 24C22.3284 24 23 23.3284 23 22.5C23 21.6716 22.3284 21 21.5 21C20.6716 21 20 21.6716 20 22.5C20 23.3284 20.6716 24 21.5 24Z"
                    stroke="#222222"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 2H6.18182L8.98364 15.3897C9.07924 15.8501 9.34109 16.2636 9.72334 16.5579C10.1056 16.8523 10.5839 17.0086 11.0745 16.9996H21.2364C21.727 17.0086 22.2053 16.8523 22.5876 16.5579C22.9698 16.2636 23.2317 15.8501 23.3273 15.3897L25 6.99988H7.22727"
                    stroke="#222222"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="descript">
                <div className="dast">
                  <h1>
                    <img src={gruz} alt="" /> Оплата и доставка
                  </h1>
                </div>
                <div className="des">
                  <h1>
                    <img src={info} alt="" /> Описание
                  </h1>
                </div>
                <div className="harak">
                  <h1>
                    <img src={tochka} alt="" /> Характеристики
                  </h1>
                </div>
              </div>
              <div className="cards">
                <img src={visa} alt="" />
                <img src={visa2} alt="" />
                <img src={paypal} alt="" />
                <img src={tink} alt="" />
                <img src={sber} alt="" />
                <img src={yandex} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="detailMap">
          <div className="sale">
            <div className="stock">
              <h1>Популярные товары</h1>
            </div>
            <div className="productMap">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  244: {
                    width: 276,
                    slidesPerView: 1,
                  },
                  376: {
                    width: 376,
                    slidesPerView: 1,
                  },
                  576: {
                    width: 576,
                    slidesPerView: 2,
                  },
                  744: {
                    width: 744,
                    slidesPerView: 2,
                  },
                }}
              >
                {DetailMap.map((product) => (
                  <SwiperSlide>
                    <Product key={product.id} {...product} product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
