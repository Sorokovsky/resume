import { isWebp, burgerMenu } from "./modules/functions.js";
const burger = document.querySelector(".burger");
const menu = document.querySelector('.header__menu');
isWebp();
burgerMenu(burger, menu);