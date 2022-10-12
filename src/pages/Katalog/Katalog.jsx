import React from "react";
import "./Katalog.css";
import { Data } from "../../Components/data/data";
import KatalogMap from "../../Components/KatalogMap/KatalogMap";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Katalog() {
  const Katalog = Data.filter((item) => item.category === "Sale");
  return (
    <div className="katalog container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="Recovery">
        <p>Отфильтровано товаров: 1314 из 1320 Сбросить</p>
        <div className="sale_list">
          {Katalog.map((item) => (
            <div className="divs">
              <KatalogMap key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Katalog;
