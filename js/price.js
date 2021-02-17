document.addEventListener('DOMContentLoaded', function(){


    let priceSelectDom = document.querySelector(".price__select");
    let pricemenuDom = document.querySelector(".price__menu");
    if(priceSelectDom)
        priceSelectDom.addEventListener("click", function () {
            pricemenuDom.classList.toggle("displaynone");
        });
    if(window.screen.width <= 768) {
        pricemenuDom.classList.add("displaynone");
    }

    let priceSubmenuTitleDom = document.querySelectorAll(".menu__submenu");
    if(priceSubmenuTitleDom)
        priceSubmenuTitleDom.forEach(function (elem) {
            elem.addEventListener("click", function () {
                let submenuDom = elem.nextElementSibling;
                submenuDom.classList.toggle("displaynone");
                elem.querySelector(".arrDown").classList.toggle("arrDownReverse");
            });
        });

    let filtersOpenDom = document.querySelector(".filters__open");
    let filtersBodyDom = document.querySelector(".filters__body");
    if(filtersOpenDom)
        filtersOpenDom.addEventListener("click", function () {
            filtersOpenDom.querySelector(".arrDown").classList.toggle("arrDownReverse");
            filtersBodyDom.classList.toggle("displaynone");
        });

    let filterDom = document.querySelectorAll(".filter");
    if(filterDom)
        filterDom.forEach(function (elem) {
            elem.addEventListener("click", function () {
                let parent = elem.parentNode;
                [...parent.children].forEach(function (filter) {
                    filter.classList.remove("selected")
                });
                elem.classList.add("selected");
            });
        });

    let closePriceDom = document.querySelector(".menu__close");
    if(closePriceDom)
        closePriceDom.addEventListener("click", function () {
            pricemenuDom.classList.toggle("displaynone");
        });
    let tableFilterDom = document.querySelectorAll(".table__filters>div");
    if(tableFilterDom) {
        let tableProdDom = document.querySelectorAll(".table>.prod");
        tableFilterDom.forEach(function (elem) {
            elem.addEventListener("click", function () {
                tableFilterDom.forEach(function (elem2) {
                    elem2.classList.remove("selected");
                });
                let filterName = elem.classList[0];
                elem.classList.add("selected");
                if(filterName !== "all") {
                    tableProdDom.forEach(function (elem2) {
                        elem2.classList.add("displaynone");
                    });
                    let tableFilteredDom = document.querySelectorAll(".table>." + filterName);
                    tableFilteredDom.forEach(function (elem2) {
                        elem2.classList.remove("displaynone");
                    });
                }
                else {
                    tableProdDom.forEach(function (elem2) {
                        elem2.classList.remove("displaynone");
                    });
                }
            });
        });
    }
});