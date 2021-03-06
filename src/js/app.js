import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});   

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
});  


const counters = document.querySelectorAll('.progress__percent'),
lines = document.querySelectorAll('.progress__skills span');
counters.forEach((item, i) =>{
lines[i].style.width = item.innerHTML;
});