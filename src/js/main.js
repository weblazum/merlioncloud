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
    burger.classList.add('open');
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

// яндекс карта
let center = [55.814634403884206, 37.385702038717675];

function getYaMap() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: 'MerlionCloud',
        balloonContentBody: 'МО, Красногорский район, г. Красногорск, бульвар Строителей, д. 4, корп. 1',
        balloonContentFooter: '<a href="tel:+78005115122">8-800-511-51-22</a><br><a href="mailto:support@merlioncloud.ru">support@merlioncloud.ru</a>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.svg',
        iconImageSize: [45, 45],
        iconImageOffset: [-19, -24]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.geoObjects.add(placemark);
}

if (document.querySelector('.form') !== null) {
    // inputmask
    const consultationForm = document.querySelector('.consultation-form');
    const inputMask = new Inputmask('+7 (999) 999-99-99');

    if (document.querySelector('.popup-form') !== null) {
        const popupForm = document.querySelector('.popup-form');
        const telSelector = popupForm.querySelector('input[type="tel"]');
        inputMask.mask(telSelector);
    }

    // just-validate
    if (document.querySelector('.consultation-form') !== null) {
        new window.JustValidate('.consultation-form', {
            rules: {
                company: {
                    required: true,
                },
                task: {
                    required: true,
                },
            },
            colorWrong: 'var(--color-red)',
            messages: {
                name: {
                    required: 'Введите имя',
                    minLength: 'Имя не должно быть меньше 3 символов',
                    maxLength: 'Имя не должно содержать более 15 символов'
                },
                email: {
                    email: 'Введите корректный E-mail',
                    required: 'Введите E-mail'
                },
                company: {
                    required: 'Введите название компании'
                },
                task: {
                    required: 'Опишите проект'
                }
            },
            submitHandler: function (thisForm) {

            }
        })
    }

    if (document.querySelector('.popup-form') !== null) {
        new window.JustValidate('.popup-form', {
            rules: {
                tel: {
                    required: true,
                    function: () => {
                        // передаем чистое значение ввода
                        const phone = telSelector.inputmask.unmaskedvalue();
                        return Number(phone) && phone.length === 10;
                    }
                },
            },
            colorWrong: 'var(--color-red)',
            messages: {
                name: {
                    required: 'Введите имя',
                    minLength: 'Имя не должно быть меньше 3 символов',
                    maxLength: 'Имя не должно содержать более 15 символов'
                },
                email: {
                    email: 'Введите корректный E-mail',
                    required: 'Введите E-mail'
                },
                tel: {
                    required: 'Введите телефон',
                    function: 'Введите корректный телефон'
                },
            },
            submitHandler: function (thisForm) {

            }
        })
    }
}