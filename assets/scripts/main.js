"use strict";

import { insertElements } from "./insert elements/insertElements.js";
import { menu } from "./menu/menu.js";
import { gallery } from "./gallery/gallery.js";

const root = document.getElementById("root");

const main = function(root){

    insertElements(root);

    // menu
    const iconMenu = document.querySelector(".hamburger"),
          menuNav = document.querySelector(".menu-navegacion");

    // gelery
    const imgGallery = document.querySelectorAll(".img-galeria"),
          imgSelector = document.querySelector(".agregar-imagen"),
          imgContent = document.querySelector(".img-light");

    return `
        ${menu(iconMenu, menuNav)}
        ${gallery(imgGallery, imgSelector, imgContent, iconMenu)}
    `;
}(root);