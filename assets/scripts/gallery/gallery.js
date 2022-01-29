"use strict";

const gallery = (imgGallery, imgSelector, imgContent, menu) => {
    const visualImg = (img) => {
        imgSelector.src = img;
        imgContent.classList.toggle("show");
        imgSelector.classList.toggle("show-image");
    }
    
    imgGallery.forEach(img => {
        img.addEventListener("click", () => {           
            visualImg(img.getAttribute("src"));
            menu.style.opacity = "0";
        });       
    });

    imgContent.addEventListener("click", e => {
        if(e.target !== imgSelector){
            imgContent.classList.remove("show");
            imgSelector.classList.remove("show-image");
            menu.style.opacity = "1";
        }
    });
}

export { gallery };