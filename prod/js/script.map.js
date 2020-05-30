var writeUs_btn = document.querySelector('.contacts__btn');
var modal_writeUs = document.querySelector('.modal-writeUs__wrap');
var writeUs_close_btn = document.querySelector('.modal-writeUs__close-btn');

var map_link = document.querySelector('.contacts__link-map');
var modal_map = document.querySelector('.modal-map__wrap');
var map_close_btn = document.querySelector('.modal-map__close-btn');

var delivery_item = document.querySelector('.services__item--delivery');
var garantee_item = document.querySelector('.services__item--guarantee');
var credit_item = document.querySelector('.services__item--credit');
var delivery_section = document.querySelector('.services__elem--delivery');
var garantee_section = document.querySelector('.services__elem--guarantee');
var credit_section = document.querySelector('.services__elem--credit');


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

//Скрипт для баннера
$(document).ready(function(){
    $('.slider-banner').slick({
        variableWidth: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
    });
});

//Скрипт для списка сервисов

delivery_item.addEventListener('click', function (evt) {
    evt.preventDefault();
    delivery_item.classList.add('services__item--active');
    delivery_section.classList.add('services__elem--active');

    garantee_item.classList.remove('services__item--active');
    garantee_section.classList.remove('services__elem--active');
    credit_item.classList.remove('services__item--active');
    credit_section.classList.remove('services__elem--active');
});

garantee_item.addEventListener('click', function (evt) {
    evt.preventDefault();
    garantee_item.classList.add('services__item--active');
    garantee_section.classList.add('services__elem--active');

    delivery_item.classList.remove('services__item--active');
    delivery_section.classList.remove('services__elem--active');
    credit_item.classList.remove('services__item--active');
    credit_section.classList.remove('services__elem--active');
});

credit_item.addEventListener('click', function (evt) {
    evt.preventDefault();
    credit_item.classList.add('services__item--active');
    credit_section.classList.add('services__elem--active');

    garantee_item.classList.remove('services__item--active');
    garantee_section.classList.remove('services__elem--active');
    delivery_item.classList.remove('services__item--active');
    delivery_section.classList.remove('services__elem--active');
});