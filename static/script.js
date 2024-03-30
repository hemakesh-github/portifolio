
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-c'),
    smooth: true
});


let loader = document.querySelector(".loader");
// const mediaTab = window.matchMedia("(max-width: 770px)");
let loaderAnimeElements = document.querySelector(".loader h4");
let loadfun = () => {
    console.log(loaderAnimeElements.classList)
    loaderAnimeElements.classList.add("load");
    setTimeout(function() {
        loader.style.top = "-100%";
    }, 2000)
}


setTimeout(function() {
    loader.style.top = "-100%";
}, 2000)

mediaTab.addEventListener("change",fun);
loadfun()
