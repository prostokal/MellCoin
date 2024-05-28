// Tokenomica
const tokPercent = document.querySelectorAll('.tokenomika__item-percent');
const tokLines = document.querySelectorAll('.tokenomika__item-slider span');

tokPercent.forEach((item, i) => {
    tokLines[i].style.width = item.innerHTML;
});