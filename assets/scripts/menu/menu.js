"use strict";

const menu = (iconMenu, menuNav) => {
    const windowTarget = window;
    
    iconMenu.addEventListener("click", () => {
        menuNav.classList.toggle("spread");
    });

    windowTarget.addEventListener("click", e => {
        if(menuNav.classList.contains("spread") && e.target != menuNav && e.target != iconMenu){           
            menuNav.classList.remove("spread");
        }
    });
}

export { menu }