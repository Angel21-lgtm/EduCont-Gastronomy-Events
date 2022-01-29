"use strict"; 

const insertElements = (root) => {

    root.innerHTML = `
        <header class="header" id="inicio">
            <img src="./assets/img/open-menu.svg" alt="" class="hamburger">
            <nav class="menu-navegacion">
                <a href="#inicio">Inicio</a>
                <a href="#servicio">Servicio</a>
                <a href="#galeria">Galería</a>
                <a href="#expertos">Expertos</a>
                <a href="#contact">Contacto</a>
            </nav>
            <div class="contenedor head">
                <h1 class="titulo">Convertimos tus sueños en realidad</h1>
                <p class="copy">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>
        </header>
        <main>
            <section class="contenedor" id="servicio">
                <h2 class="subtitulo">Nuestro servicio</h2>
                <div class="contenedor-servicio">
                    <img src="./assets/img/checklist.svg" alt="">
                    <div class="checklist-servicio">
                        <div class="service">
                            <h3 class="n-service"><span class="number">1</span>Repostería</h3>
                            <p>
                                Lorem, ipsum dolor sit amet 
                                consectetur adipisicing elit. 
                                Velit, repellendus aut. 
                                Accusamus voluptas, quae dolore 
                                impedit odit corporis vel consequatur.
                            </p>
                        </div>
                        <div class="service">
                            <h3 class="n-service"><span class="number">2</span>Cocina y Eventos</h3>
                            <p>
                                Lorem, ipsum dolor sit amet 
                                consectetur adipisicing elit. 
                                Velit, repellendus aut. 
                                Accusamus voluptas, quae dolore 
                                impedit odit corporis vel consequatur.
                            </p>
                        </div>
                        <div class="service">
                            <h3 class="n-service"><span class="number">3</span>Panadería</h3>
                            <p>
                                Lorem, ipsum dolor sit amet 
                                consectetur adipisicing elit. 
                                Velit, repellendus aut. 
                                Accusamus voluptas, quae dolore 
                                impedit odit corporis vel consequatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="gallery" id="galeria">
                <div class="contenedor">
                    <h2 class="subtitulo">Galería</h2>
                    <div class="contenedor-galeria">
                        <img src="./assets/img/postre-1.jpg" alt="#" class="img-galeria">
                        <img src="./assets/img/postre-2.jpg" alt="#" class="img-galeria">
                        <img src="./assets/img/postre-3.jpg" alt="#" class="img-galeria">
                        <img src="./assets/img/postre-4.jpg" alt="#" class="img-galeria">
                        <img src="./assets/img/postre-5.jpg" alt="#" class="img-galeria">
                        <img src="./assets/img/postre-6.jpg" alt="#" class="img-galeria">
                    </div>
                </div>
            </section>
            <section class="img-light">
                <img src="./assets/img/close-menu.svg" alt="" class="close">
                <img src="" alt="" class="agregar-imagen">
            </section>
            <section class="contenedor" id="expertos">
                <h2 class="subtitulo">Expertos en:</h2>
                <section class="experts">
                    <div class="cont-expert">
                        <img src="./assets/img/expert.jpg" alt="">
                        <h3 class="n-expert">REPOSTERÍA</h3>
                    </div>
                    <div class="cont-expert">
                        <img src="./assets/img/expert.jpg" alt="">
                        <h3 class="n-expert">COCINA Y EVENTOS</h3>
                    </div>
                    <div class="cont-expert">
                        <img src="./assets/img/expert.jpg" alt="">
                        <h3 class="n-expert">PANADERÍA</h3>
                    </div>
                </section>
            </section>
        </main>
        <footer id="contact">
            <div class="contenedor footer-content">
                <div class="contact-us">
                    <h2 class="brand">Eduardo Contreras O.</h2>
                    <p>Somos expertos en gastronomía</p>
                </div>
                <div class="social-media">
                    <a href="#" class="social-media-icon">
                        <?xml version="1.0"?><svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"/></svg>                    </a>
                    <a href="#" class="social-media-icon">
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
                    </a>
                    <a href="#" class="social-media-icon">
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg>
                    </a>
                </div>
            </div>
            <div class="line"></div>
        </footer>
    `;
    
    return root;
}

export { insertElements };