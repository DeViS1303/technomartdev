var writeUs_btn = document.querySelector('.contacts__btn');
var modal_writeUs = document.querySelector('.modal-writeUs__wrap');
var writeUs_close_btn = document.querySelector('.modal-writeUs__close-btn');
var map_link = document.querySelector('.contacts__link-map');
var modal_map = document.querySelector('.modal-map__wrap');
var map_close_btn = document.querySelector('.modal-map__close-btn');

// Функции для модального окна "Напишите нам"

writeUs_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal_writeUs.classList.add('modal-open');
});

writeUs_close_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal_writeUs.classList.remove('modal-open');
});

// Функции для модального окна "Карта"

map_link.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal_map.classList.add('modal-open');
});

map_close_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal_map.classList.remove('modal-open');
});

//Скрипт баннера

$(document).ready(function(){
    $('.slider-banner').slick({
        variableWidth: false,
    });
});