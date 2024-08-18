import React from "react";
import "./Main.scss";
import Ellipse from "/Ellipse.png";

function Main() {
  return (
    <section className="main" id="main">
      <div className="container main__wrapper">
        <div className="main__text">
          <p className="main__primary-text">
            Продажа всего <br /> для бетона и<br />
            растворов
          </p>
          <p className="main__sub-text">
            Предоставляем <br /> высококачественный
            <br /> бетон и химикаты для любых
            <br />
            строительных нужд
          </p>
          <button className="main__order--button">Заказать сейчас</button>
        </div>
        <img id="item" className="main__elipse" src={Ellipse} alt="" />
      </div>
    </section>
  );
}

export default Main;
