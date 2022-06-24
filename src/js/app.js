import { isWebp } from "./modules/functions.js";
isWebp();
const burger = document.querySelector(".burger");
const menu = document.querySelector('.header__menu');
if (burger) {
    burger.addEventListener("click", (e) => {
        if(menu){
            if (menu.classList.contains('_active')) {
                burger.classList.remove('_active');
                burger.children[0].classList.remove('_active');
                menu.classList.remove('_active');
                document.body.classList.remove('_lock');
            }else{
                burger.classList.add('_active');
                burger.children[0].classList.add('_active');
                menu.classList.add('_active');
                document.body.classList.add('_lock');
            }
        }
    });
}