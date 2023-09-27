$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
    menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeClass);
    }
});