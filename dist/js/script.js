// Tokenomica
const tokPercent = document.querySelectorAll('.tokenomika__item-percent');
const tokLines = document.querySelectorAll('.tokenomika__item-slider span');

tokPercent.forEach((item, i) => {
    tokLines[i].style.width = item.innerHTML;
});
// Hamburger

const hamburger = document.querySelector('.hamburger')
const menuClose = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', (e) => {
    menu.classList.add('active')
});
menuClose.addEventListener('click', (e) => {
    menu.classList.remove('active')
})