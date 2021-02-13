document.addEventListener('DOMContentLoaded', function(){
    let priceSelectDom = document.querySelector(".price__select");
    let pricemenuDom = document.querySelector(".price__menu");
    priceSelectDom.addEventListener("click", function () {
        pricemenuDom.classList.toggle("displaynone");
    });


    let priceSubmenuTitleDom = document.querySelectorAll(".menu__submenu");
    priceSubmenuTitleDom.forEach(function (elem) {
        elem.addEventListener("click", function () {
            let submenuDom = elem.nextElementSibling;
            submenuDom.classList.toggle("displaynone");
            elem.querySelector(".arrDown").classList.toggle("arrDownReverse");
        });
    });

    let filtersOpenDom = document.querySelector(".filters__open");
    let filtersBodyDom = document.querySelector(".filters__body");
    filtersOpenDom.addEventListener("click", function () {
        filtersOpenDom.querySelector(".arrDown").classList.toggle("arrDownReverse");
        filtersBodyDom.classList.toggle("displaynone");
    });

    let filterDom = document.querySelectorAll(".filter");
    filterDom.forEach(function (elem) {
        elem.addEventListener("click", function () {
            let parent = elem.parentNode;
            [...parent.children].forEach(function (filter) {
                filter.classList.remove("selected")
            });
            elem.classList.add("selected");
        });
    });
});