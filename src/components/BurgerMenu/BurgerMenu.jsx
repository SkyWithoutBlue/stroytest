import React, { useEffect, useState, useRef } from "react";
import "./BurgerMenu.scss";

function BurgerMenu() {
  const handleBurgerClick = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navBar = document.querySelector(".nav-bar");
    const overlay = document.querySelector(".overlay");
    const headerLink = document.querySelectorAll(".header__link");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        navBar.classList.add("toggle");
        overlay.classList.add("show");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        navBar.classList.remove("toggle");
        overlay.classList.remove("show");
        menuOpen = false;
      }
    });
    overlay.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        navBar.classList.add("toggle");
        overlay.classList.add("show");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        navBar.classList.remove("toggle");
        overlay.classList.remove("show");
        menuOpen = false;
      }
    });
  };

  return (
    <div className="menu-btn" onClick={useEffect(handleBurgerClick)}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}

export default BurgerMenu;
