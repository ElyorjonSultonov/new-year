import React, { useState } from "react";
import "./Register.css";
import car from "../../assets/img/car.png";
import love from "../../assets/img/love.png";
import users from "../../assets/img/user.png";
import key from "../../assets/img/Key.png";
import women from "../../assets/img/Ellipse 125.png";
import frame from "../../assets/img/Frame 2030.png";
import group from "../../assets/img/Group 55798.png";
import logout from "../../assets/img/logout.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const btn = () => {};

  return (
    <div className="login_page">
      <div className="reklama">
        <div className="women">
          <img src={women} alt="" />
        </div>
        <div className="frame">
          <img src={frame} alt="" />
          <img src={group} alt="" />
        </div>
        <p>
          Объект индуцирует элементарный экситон. Поверхность, в согласии с
          традиционными представлениями, притягивает фонон. Газ, несмотря на
          внешние воздействия, гомогенно испускает объект.
        </p>
        <h1>Личный кабинет</h1>
      </div>
      <div className="login">
        <div className="login_left">
          <div className="car">
            <img src={car} alt="" />
            <p>История заказов</p>
          </div>
          <div className="love">
            <img src={love} alt="" />
            <p>Избранные товары</p>
          </div>
          <div className="user">
            <img src={users} alt="" />
            <p>Персональные данные</p>
          </div>
          <div className="key">
            <img src={key} alt="" />
            <p>Изменить пароль</p>
          </div>
          <div className="logout">
            <img src={logout} alt="" />
            <p>Выход из аккаунта</p>
          </div>
        </div>
        <div className="login_right">
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={btn}>Login</button>
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
