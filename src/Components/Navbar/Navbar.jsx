import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo 1.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.products.products);

  const navigate = useNavigate();

  const loginBtn = () => {
    navigate("/login");
  };

  const katalogBtn = () => {
    navigate("/katalog");
  };

  const homeBtn = () => {
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="navbar_top">
          <div className="container">
            <div className="row">
              <div className="location">
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none">
                  <path
                    d="M17.3636 9.18182C17.3636 15.5455 9.18182 21 9.18182 21C9.18182 21 1 15.5455 1 9.18182C1 7.01187 1.86201 4.93079 3.3964 3.3964C4.93079 1.86201 7.01186 1 9.18182 1C11.3518 1 13.4328 1.86201 14.9672 3.3964C16.5016 4.93079 17.3636 7.01187 17.3636 9.18182Z"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.18186 11.9091C10.6881 11.9091 11.9091 10.6881 11.9091 9.18186C11.9091 7.67563 10.6881 6.45459 9.18186 6.45459C7.67563 6.45459 6.45459 7.67563 6.45459 9.18186C6.45459 10.6881 7.67563 11.9091 9.18186 11.9091Z"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1>Москва и облость</h1>
              </div>
              <ul>
                <Link to={"/new"}>
                  <li>Новости</li>
                </Link>
                <Link to={"/contact"}>
                  <li>Контакты</li>
                </Link>
                <li>Вопрос ответ</li>
              </ul>
              <div className="contact">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path
                    d="M19.9994 15.2252V18.0854C20.0005 18.3509 19.946 18.6138 19.8394 18.8571C19.7328 19.1004 19.5765 19.3188 19.3804 19.4983C19.1844 19.6778 18.9529 19.8144 18.7009 19.8995C18.4489 19.9846 18.1818 20.0162 17.9168 19.9923C14.9772 19.6735 12.1534 18.671 9.67246 17.0653C7.36425 15.6014 5.4073 13.6484 3.94057 11.3447C2.32607 8.85744 1.32133 6.02557 1.00775 3.07855C0.983881 2.8149 1.01528 2.54917 1.09994 2.2983C1.18461 2.04742 1.32069 1.81688 1.49952 1.62136C1.67835 1.42585 1.89601 1.26963 2.13865 1.16267C2.38128 1.05571 2.64358 1.00034 2.90883 1.00009H5.77477C6.2384 0.995538 6.68786 1.15939 7.03938 1.4611C7.39091 1.76282 7.62052 2.18181 7.6854 2.63998C7.80637 3.55533 8.0307 4.45408 8.35413 5.31909C8.48266 5.66035 8.51047 6.03122 8.43428 6.38777C8.35809 6.74431 8.18108 7.07159 7.92423 7.33082L6.71098 8.54166C8.07093 10.9286 10.0512 12.9049 12.4429 14.2622L13.6561 13.0513C13.9159 12.795 14.2438 12.6184 14.601 12.5423C14.9583 12.4663 15.3299 12.494 15.6718 12.6223C16.5386 12.9451 17.4391 13.169 18.3563 13.2897C18.8203 13.355 19.2441 13.5883 19.5471 13.9452C19.8501 14.302 20.011 14.7576 19.9994 15.2252Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  +7 123 456-78-90 <span>(c 05:00 до 00:00)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar_bottom">
          <div className="container">
            <div className="row">
              <div className="navbar_bottom_logo">
                <img onClick={() => navigate("/")} src={LOGO} alt={LOGO} />
              </div>
              <button onClick={() => navigate("/katalog")}>Каталог</button>
              <form>
                <input type="text" placeholder="Что вы ищите?" />
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 19L14.65 14.65"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </form>
              <div className="navbar_bottom_icons">
                <svg
                  onClick={loginBtn}
                  style={{ cursor: "pointer" }}
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <mask
                    id="mask0_9425_1493"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="26"
                    height="26"
                  >
                    <circle
                      cx="13"
                      cy="13"
                      r="12"
                      fill="#C4C4C4"
                      stroke="#FFD600"
                      strokeWidth="2"
                    />
                  </mask>
                  <g mask="url(#mask0_9425_1493)">
                    <path
                      d="M21.84 24.0499V21.8399C21.84 20.6677 21.3744 19.5434 20.5454 18.7145C19.7165 17.8856 18.5923 17.4199 17.42 17.4199H8.58003C7.40778 17.4199 6.28353 17.8856 5.45462 18.7145C4.62571 19.5434 4.16003 20.6677 4.16003 21.8399V24.0499"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0001 14.04C15.4412 14.04 17.4201 12.061 17.4201 9.61995C17.4201 7.17885 15.4412 5.19995 13.0001 5.19995C10.559 5.19995 8.58008 7.17885 8.58008 9.61995C8.58008 12.061 10.559 14.04 13.0001 14.04Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="13"
                      cy="13"
                      r="12"
                      stroke="#FFCF01"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
                  <path
                    d="M24.0723 2.93727C23.4614 2.3231 22.7361 1.8359 21.9378 1.50349C21.1396 1.17109 20.2839 1 19.4199 1C18.5558 1 17.7001 1.17109 16.9019 1.50349C16.1036 1.8359 15.3783 2.3231 14.7674 2.93727L13.4997 4.2113L12.2319 2.93727C10.998 1.69727 9.3245 1.00064 7.57951 1.00064C5.83452 1.00064 4.16099 1.69727 2.92709 2.93727C1.6932 4.17728 1 5.85908 1 7.61271C1 9.36634 1.6932 11.0481 2.92709 12.2881L4.19485 13.5622L13.4997 22.913L22.8045 13.5622L24.0723 12.2881C24.6834 11.6743 25.1682 10.9454 25.499 10.1432C25.8298 9.34093 26 8.48107 26 7.61271C26 6.74434 25.8298 5.88448 25.499 5.08226C25.1682 4.28003 24.6834 3.55116 24.0723 2.93727V2.93727Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => navigate("/basket")}
                  className="basket"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.5 23C10.3284 23 11 22.3284 11 21.5C11 20.6716 10.3284 20 9.5 20C8.67157 20 8 20.6716 8 21.5C8 22.3284 8.67157 23 9.5 23Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 23C21.3284 23 22 22.3284 22 21.5C22 20.6716 21.3284 20 20.5 20C19.6716 20 19 20.6716 19 21.5C19 22.3284 19.6716 23 20.5 23Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1H5.18182L7.98364 14.3897C8.07924 14.8501 8.34109 15.2636 8.72334 15.5579C9.1056 15.8523 9.58391 16.0086 10.0745 15.9996H20.2364C20.727 16.0086 21.2053 15.8523 21.5876 15.5579C21.9698 15.2636 22.2317 14.8501 22.3273 14.3897L24 5.99988H6.22727"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="bac">
                  <p>{products.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
