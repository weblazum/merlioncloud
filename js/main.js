"use strict";

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            1080: {
                items: 2
            }
        }
    })
    $('[data-src="popup"]').fancybox({
        src: '#popup-form',
        touch: false,
        scrolling: 'hidden',
        toolbar: false,
        lang: "ru"
    })
});

const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay'),
    dropLink = document.querySelector('.nav__link--drop'),
    dropItem = document.querySelector('.nav__item--drop'),
    dropdownList = document.querySelector('.nav__sublist'),
    closeBtn = document.querySelector('.close-btn');

const lockScroll = () => {
    document.body.classList.add('lock');
}

const unlockScroll = () => {
    document.body.classList.remove('lock');
}

burger.addEventListener('click', () => {
    menu.classList.add('nav--active');
    overlay.classList.add('open');
    lockScroll();
});

overlay.addEventListener('click', () => {
    menu.classList.remove('nav--active');
    overlay.classList.remove('open');
    unlockScroll();
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('nav--active');
    overlay.classList.remove('open');
    unlockScroll();
});

dropLink.addEventListener('click', () => {
    dropLink.classList.toggle('nav__link--open');
    dropdownList.classList.toggle('sublist__open');
});


const x = window.matchMedia("(min-width: 1080px)")

function menuHoverOverlay(x) {
    if (x.matches) { // Если медиа запрос совпадает
        dropItem.onmouseenter = function () {
            overlay.classList.add('open');
        };
        dropItem.onmouseleave = function () {
            overlay.classList.remove('open');
        };
    } else {
    }
}

menuHoverOverlay(x) // Вызов функции прослушивателя во время выполнения
x.addListener(menuHoverOverlay) // Прикрепить функцию прослушивателя при изменении состояния

const copyrightYear = new Date().getFullYear();

document.getElementById('copyright-year').innerHTML = copyrightYear;