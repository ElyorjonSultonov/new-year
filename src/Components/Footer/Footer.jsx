import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import visa from "../../assets/image/visa-mastercard 1.png";
import visa2 from "../../assets/image/visa-mastercard-mir 1.png";
import paypal from "../../assets/image/paypal 1.png";
import tink from "../../assets/image/tinkoff 1.png";
import sber from "../../assets/image/sberbank 1.png";
import yandex from "../../assets/image/yandexmoney 1.png";
function Footer() {
  return (
    <>
      <div className="footerTop">
        <div className="tatle">
          <div className="left">
            <div className="tel">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9994 15.2252V18.0854C20.0005 18.3509 19.946 18.6138 19.8394 18.8571C19.7328 19.1004 19.5765 19.3188 19.3804 19.4983C19.1844 19.6778 18.9529 19.8144 18.7009 19.8995C18.4489 19.9846 18.1818 20.0162 17.9168 19.9923C14.9772 19.6735 12.1534 18.671 9.67246 17.0653C7.36425 15.6014 5.4073 13.6484 3.94057 11.3447C2.32607 8.85744 1.32133 6.02557 1.00775 3.07855C0.983881 2.8149 1.01528 2.54917 1.09994 2.2983C1.18461 2.04742 1.32069 1.81688 1.49952 1.62136C1.67835 1.42585 1.89601 1.26963 2.13865 1.16267C2.38128 1.05571 2.64358 1.00034 2.90883 1.00009H5.77477C6.2384 0.995538 6.68786 1.15939 7.03938 1.4611C7.39091 1.76282 7.62052 2.18181 7.6854 2.63998C7.80637 3.55533 8.0307 4.45408 8.35413 5.31909C8.48266 5.66035 8.51047 6.03122 8.43428 6.38777C8.35809 6.74431 8.18108 7.07159 7.92423 7.33082L6.71098 8.54166C8.07093 10.9286 10.0512 12.9049 12.4429 14.2622L13.6561 13.0513C13.9159 12.795 14.2438 12.6184 14.601 12.5423C14.9583 12.4663 15.3299 12.494 15.6718 12.6223C16.5386 12.9451 17.4391 13.169 18.3563 13.2897C18.8203 13.355 19.2441 13.5883 19.5471 13.9452C19.8501 14.302 20.011 14.7576 19.9994 15.2252Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p> +7 123 456-78-90 (c 05:00 до 00:00)</p>
            </div>
            <div className="sms">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM10.3587 7.3825C9.38625 7.7875 7.44125 8.625 4.52625 9.895C4.05375 10.0825 3.805 10.2675 3.7825 10.4475C3.745 10.7512 4.12625 10.8713 4.645 11.035L4.86375 11.1038C5.37375 11.27 6.06125 11.4637 6.4175 11.4713C6.7425 11.4788 7.10375 11.3463 7.5025 11.0713C10.2262 9.2325 11.6325 8.30375 11.72 8.28375C11.7825 8.26875 11.87 8.25125 11.9275 8.30375C11.9862 8.355 11.98 8.45375 11.9738 8.48C11.9363 8.64125 10.44 10.0312 9.66625 10.7512C9.425 10.9762 9.25375 11.135 9.21875 11.1713C9.14168 11.25 9.06333 11.3275 8.98375 11.4038C8.50875 11.8612 8.15375 12.2038 9.0025 12.7638C9.41125 13.0338 9.73875 13.255 10.065 13.4775C10.42 13.72 10.775 13.9613 11.235 14.2638C11.3512 14.3387 11.4638 14.42 11.5725 14.4975C11.9863 14.7925 12.36 15.0575 12.8188 15.015C13.0863 14.99 13.3625 14.74 13.5025 13.99C13.8337 12.2188 14.485 8.3825 14.635 6.80125C14.6442 6.6698 14.6387 6.53775 14.6187 6.4075C14.607 6.3024 14.5561 6.20557 14.4763 6.13625C14.3625 6.05774 14.2269 6.01706 14.0887 6.02C13.7137 6.02625 13.135 6.2275 10.3587 7.3825Z"
                  fill="black"
                />
              </svg>
              <p>Написать нам</p>
            </div>
          </div>
          <div className="right">
            <div className="svg">
              <div className="tlgr">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM10.3587 7.3825C9.38625 7.7875 7.44125 8.625 4.52625 9.895C4.05375 10.0825 3.805 10.2675 3.7825 10.4475C3.745 10.7512 4.12625 10.8713 4.645 11.035L4.86375 11.1038C5.37375 11.27 6.06125 11.4637 6.4175 11.4713C6.7425 11.4788 7.10375 11.3463 7.5025 11.0713C10.2262 9.2325 11.6325 8.30375 11.72 8.28375C11.7825 8.26875 11.87 8.25125 11.9275 8.30375C11.9862 8.355 11.98 8.45375 11.9738 8.48C11.9363 8.64125 10.44 10.0312 9.66625 10.7512C9.425 10.9762 9.25375 11.135 9.21875 11.1713C9.14168 11.25 9.06333 11.3275 8.98375 11.4038C8.50875 11.8612 8.15375 12.2038 9.0025 12.7638C9.41125 13.0338 9.73875 13.255 10.065 13.4775C10.42 13.72 10.775 13.9613 11.235 14.2638C11.3512 14.3387 11.4638 14.42 11.5725 14.4975C11.9863 14.7925 12.36 15.0575 12.8188 15.015C13.0863 14.99 13.3625 14.74 13.5025 13.99C13.8337 12.2188 14.485 8.3825 14.635 6.80125C14.6442 6.6698 14.6387 6.53775 14.6187 6.4075C14.607 6.3024 14.5561 6.20557 14.4763 6.13625C14.3625 6.05774 14.2269 6.01706 14.0887 6.02C13.7137 6.02625 13.135 6.2275 10.3587 7.3825Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="fsbk">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0005 10.0615C20.0005 4.50402 15.523 -0.000976562 10.0005 -0.000976562C4.47555 0.000273438 -0.00195312 4.50402 -0.00195312 10.0628C-0.00195312 15.084 3.65555 19.2465 8.43555 20.0015V12.9703H5.89805V10.0628H8.43805V7.84402C8.43805 5.32277 9.9318 3.93027 12.2155 3.93027C13.3105 3.93027 14.4543 4.12652 14.4543 4.12652V6.60152H13.193C11.9518 6.60152 11.5643 7.37777 11.5643 8.17402V10.0615H14.3368L13.8943 12.969H11.563V20.0003C16.343 19.2453 20.0005 15.0828 20.0005 10.0615Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="wew">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 4.47717 4.47717 0 10 0C15.5228 0 20 4.47717 20 10C20 15.5228 15.5228 20 10 20C4.47717 20 0 15.5228 0 10ZM10.5231 13.2817C10.5231 13.2817 10.7156 13.2607 10.8142 13.1567C10.9045 13.0615 10.9013 12.8818 10.9013 12.8818C10.9013 12.8818 10.8893 12.0424 11.2864 11.9185C11.6777 11.7966 12.18 12.7302 12.7133 13.0892C13.116 13.3606 13.4217 13.3012 13.4217 13.3012L14.8465 13.2817C14.8465 13.2817 15.5915 13.2366 15.2383 12.6615C15.2091 12.6144 15.0322 12.236 14.1792 11.4586C13.2855 10.6449 13.4055 10.7765 14.4813 9.36871C15.1366 8.51142 15.3985 7.98804 15.3165 7.76429C15.2388 7.55021 14.7567 7.60704 14.7567 7.60704L13.153 7.61679C13.153 7.61679 13.0341 7.60092 12.9459 7.65263C12.8598 7.70333 12.804 7.82162 12.804 7.82162C12.804 7.82162 12.5505 8.48479 12.2119 9.04912C11.4977 10.2393 11.2123 10.3022 11.0954 10.2285C10.8236 10.056 10.8914 9.53617 10.8914 9.16692C10.8914 8.01317 11.0699 7.53229 10.5445 7.40783C10.3702 7.36637 10.2419 7.33921 9.79583 7.33462C9.22354 7.329 8.73938 7.33667 8.46496 7.46829C8.28238 7.55583 8.1415 7.75146 8.22758 7.76275C8.3335 7.77654 8.5735 7.82625 8.70079 7.99625C8.86512 8.21596 8.85938 8.70858 8.85938 8.70858C8.85938 8.70858 8.95383 10.0667 8.63871 10.2352C8.42271 10.3509 8.12638 10.1148 7.48938 9.03479C7.16333 8.48175 6.91708 7.87029 6.91708 7.87029C6.91708 7.87029 6.86958 7.75608 6.78454 7.69462C6.68179 7.62037 6.53829 7.59733 6.53829 7.59733L5.01442 7.60704C5.01442 7.60704 4.78538 7.61321 4.70138 7.711C4.62679 7.79754 4.69562 7.97729 4.69562 7.97729C4.69562 7.97729 5.88879 10.7176 7.24 12.0988C8.47904 13.3647 9.88558 13.2817 9.88558 13.2817H10.5231Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="pep">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0637 0.498779H10.175C11.2025 0.502529 16.4088 0.54003 17.8125 0.917529C18.2369 1.03274 18.6236 1.25731 18.9339 1.56879C19.2443 1.88027 19.4675 2.26776 19.5812 2.69253C19.7075 3.16753 19.7962 3.79628 19.8563 4.44503L19.8688 4.57503L19.8962 4.90003L19.9062 5.03003C19.9875 6.17253 19.9975 7.24253 19.9987 7.47628V7.57003C19.9975 7.81253 19.9862 8.95503 19.8962 10.145L19.8862 10.2763L19.875 10.4063C19.8125 11.1213 19.72 11.8313 19.5812 12.3538C19.4679 12.7787 19.2448 13.1664 18.9344 13.4779C18.6239 13.7895 18.237 14.0139 17.8125 14.1288C16.3625 14.5188 10.8512 14.5463 10.0875 14.5475H9.91C9.52375 14.5475 7.92625 14.54 6.25125 14.4825L6.03875 14.475L5.93 14.47L5.71625 14.4613L5.5025 14.4525C4.115 14.3913 2.79375 14.2925 2.185 14.1275C1.76061 14.0128 1.37383 13.7885 1.06341 13.4772C0.752979 13.1659 0.529809 12.7785 0.41625 12.3538C0.2775 11.8325 0.185 11.1213 0.1225 10.4063L0.1125 10.275L0.1025 10.145C0.0408095 9.29803 0.00662483 8.44925 0 7.60003L0 7.44753C0.0025 7.17878 0.0125 6.25003 0.08 5.22503L0.08875 5.09628L0.0925 5.03128L0.1025 4.90128L0.13 4.57628L0.1425 4.44628C0.2025 3.79753 0.29125 3.16753 0.4175 2.69378C0.530867 2.26884 0.753953 1.88117 1.06439 1.56963C1.37483 1.2581 1.76171 1.03364 2.18625 0.918779C2.795 0.756279 4.11625 0.656279 5.50375 0.593779L5.71625 0.585029L5.93125 0.577529L6.03875 0.573779L6.2525 0.565029C7.44213 0.526331 8.63225 0.504662 9.8225 0.500029H10.0637V0.498779ZM8 4.51128V10.5338L13.1962 7.52378L8 4.51128Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="inst">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78262 0.776024 2.17811 1.16978 1.67875 1.67875C1.1701 2.17837 0.776384 2.7828 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2182 19.2239 17.8223 18.8301 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2237 2.78278 18.8299 2.17834 18.3212 1.67875C17.822 1.16959 17.2175 0.775807 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10.0013H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6359 16.3279 17.38 16.7205 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66937 17.6299 3.27641 17.3745 2.95375 17.0425C2.62094 16.72 2.36465 16.3271 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.325 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.8854 6.66625 11.7334 7.01748 12.3586 7.64268C12.9838 8.26788 13.335 9.11583 13.335 10C13.335 10.8842 12.9838 11.7321 12.3586 12.3573C11.7334 12.9825 10.8854 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== */}
      <div className="footer">
        <div className="table_top">
          <div className="table1">
            <h1>Навигация</h1>
            <Link className="link" to={"/"}>
              Новинки
            </Link>
            <Link className="link" to={"/"}>
              Вопрос ответ
            </Link>
            <Link className="link" to={"/"}>
              Контакты
            </Link>
          </div>
          <div className="table2">
            <h1>Покупателям</h1>
            <Link className="link" to={"/"}>
              Каталог
            </Link>
            <Link className="link" to={"/"}>
              Корзина
            </Link>
            <Link className="link" to={"/"}>
              Избранные товары
            </Link>
            <Link className="link" to={"/"}>
              Профиль
            </Link>
          </div>
          <div className="table3">
            <h1>Партнёрам</h1>
            <p>Пункты самовывоза </p>
            <p>Служба поддержки клиентов</p>
            <p>Ищем новых поставщиков</p>
            <p>Оптовые продажи</p>
            <p>Центральный офис</p>
            <p>Пресс-служба</p>
          </div>
          <div className="table4">
            <h1>Услуги</h1>
            <p>Доставка</p>
          </div>
          <div className="table5">
            <h1>Связь с нами</h1>
            <p>Контакты</p>
          </div>
        </div>
        <div className="table_img">
          <h1>Мы принимаем к оплате</h1>
          <img src={visa} alt="" />
          <img src={visa2} alt="" />
          <img src={paypal} alt="" />
          <img src={tink} alt="" />
          <img src={sber} alt="" />
          <img src={yandex} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;