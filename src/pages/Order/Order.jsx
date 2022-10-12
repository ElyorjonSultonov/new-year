import React from "react";
import "./Order.css";
import Group from "../../assets/image/credit-card 1.png";
import payp from "../../assets/image/paypal 1.png";
import qiwi from "../../assets/image/Qiwi.png";
import cdik from "../../assets/image/cdik.png";
import box from "../../assets/image/box.png";
import pochta from "../../assets/image/pochta.png";

function Order() {
  return (
    <div className="container mTop">
      <div className="big2">
        <div className="big">
          <h1>Оформление заказа</h1>
          <div className="part1">
            <h1>1. Контактные данные</h1>
            <div className="part2">
              <input type="text" placeholder="Введите ваше имя" />
              <input type="text" placeholder="Введите вашу фамилию" />
              <input type="text" placeholder="+7 (96_) ___-__-__" />
              <input type="text" placeholder="E-mail (электронная почта)" />
            </div>
            <h1>2. Способ доставки</h1>
            <div className="part3">
              <div className="top">
                <div className="left">
                  <input name="inp" type="radio" />
                  <p>Служба доставки «СДЭК»</p>
                  <p>1 223₽</p>
                </div>
                <div className="right">
                  <img src={cdik} alt="" />
                </div>
              </div>
              <div className="top">
                <div className="left">
                  <input name="inp" type="radio" />
                  <p>Служба доставки «Boxberry»</p>
                  <p>1 223₽</p>
                </div>
                <div className="right">
                  <img src={box} alt="" />
                </div>
              </div>
              <div className="top">
                <div className="left">
                  <input name="inp" type="radio" />
                  <p>Почта России</p>
                  <p>1 223₽</p>
                </div>
                <div className="right">
                  <img src={pochta} alt="" />
                </div>
              </div>
            </div>
            <h1>3. Данные доставки</h1>
            <div className="part4">
              <div className=" div1">
                <input
                  className="inp1"
                  type="text"
                  placeholder="Район, населенный пункт"
                />
                <input className="inp2" type="text" placeholder="Индекс" />
              </div>
              <div className=" div2">
                <input className="inp3" type="text" placeholder="Улица" />
              </div>
              <div className=" div3">
                <input type="text" placeholder="Дом" />
                <input type="text" placeholder="Этаж" />
                <input type="text" placeholder="Квартира" />
              </div>
            </div>
            <h1>4. Способ доставки</h1>
            <div className="part5">
              <div className="bac">
                <div className="right">
                  <img src={Group} alt="" />
                  <div className="text">
                    <h3>Банковская карта</h3>
                    <p>Мгновенное зачисление</p>
                  </div>
                </div>
                <input name="order" type="radio" />
              </div>
              <div className="bac">
                <div className="right">
                  <img src={payp} alt="" />
                  <div className="text">
                    <h3>PayPal</h3>
                    <p>Мгновенное зачисление</p>
                  </div>
                </div>
                <input name="order" type="radio" />
              </div>
              <div className="bac">
                <div className="right">
                  <img src={qiwi} alt="" />
                  <div className="text">
                    <h3>QIWI wallet</h3>
                    <p>Мгновенное зачисление</p>
                  </div>
                </div>
                <input name="order" type="radio" />
              </div>
            </div>
            <div className="part6">
              <div className="itog">
                <h3>Итого:</h3>
                <h1>45 980₽</h1>
              </div>
              <button>Оформить заказ</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="itogo">
              <h1>Итого:</h1>
              <h2>45 980₽</h2>
              <p>430 руб</p>
              <img src="" alt="" />
            </div>
            <h3>Ваш заказ</h3>
            <div className="flex">
              <h4>Всего товаров</h4>
              <h5>20</h5>
            </div>
            <div className="flex">
              <h4>Сумма</h4>
              <h5>45 980 ₽</h5>
            </div>
            <h4>От 3000 рублей бесплатная доставка по украине</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
