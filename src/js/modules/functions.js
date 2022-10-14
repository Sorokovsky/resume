import { burger, menu, header, } from "./variables.js";
export function openPopub(popub) {
    if (!popub.classList.contains('_active')) {
        popub.classList.add('_active');
    }
}
export function closePopub(popub) {
    if (popub.classList.contains('_active')) {
        popub.classList.remove('_active');
    }
}
var burgerToggle = function () {
    if (burger.classList.contains("_active")) {
        burger.classList.remove("_active");
        document.body.classList.remove("_lock");
        burger.children[0].classList.remove("_active");
        closePopub(menu);
    }
    else if (!burger.classList.contains("_active")) {
        burger.classList.add("_active");
        document.body.classList.add("_lock");
        burger.children[0].classList.add("_active");
        openPopub(menu);
    }
};
export var mobileMenu = function () {
    if (window.innerWidth <= 991) {
        burger.addEventListener('click', burgerToggle);
    }
};
export function paralaxOnMove(paralax) {
    if (window.innerWidth >= 991) {
        var centerX_1 = window.innerWidth / 2, centerY_1 = window.innerHeight / 2, paralaxX_1 = 30, speed_1 = 0.23, paralaxY_1 = -30;
        paralax.style.transform = "translate(".concat(paralaxX_1, "px, ").concat(paralaxY_1, "px)");
        document.addEventListener('mousemove', function (e) {
            if (e.clientX < centerX_1) {
                paralaxX_1 = paralaxX_1 - speed_1;
            }
            else if (e.clientX > centerX_1) {
                paralaxX_1 = paralaxX_1 + speed_1;
            }
            if (e.clientY > centerY_1) {
                paralaxY_1 = paralaxY_1 + speed_1;
            }
            else if (e.clientY < centerY_1) {
                paralaxY_1 = paralaxY_1 - speed_1;
            }
            paralax.style.transform = "translate(".concat(paralaxX_1, "px, ").concat(paralaxY_1, "px)");
            centerY_1 = e.clientY;
            centerX_1 = e.clientX;
        });
    }
}
export var headerScroll = function () {
    headerFix();
    document.addEventListener('scroll', headerFix);
};
function headerFix() {
    var headerHeight = Number(window.getComputedStyle(header, null).getPropertyValue("height").replace("px", "")) / 2;
    if (window.scrollY > headerHeight) {
        console.log(window.scrollY >= headerHeight);
        header.classList.add("fixed");
    }
    else {
        header.classList.remove("fixed");
    }
}
export function isWebp() {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }
        else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}
