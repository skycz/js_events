"use strict";

// Синтаксис
// target.addEventListener(type, listener[, options]);
// первый способ назначения событий и их обработчика (не рекомендуется)

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

/* btn.onclick = function() {
    alert('Click');
};  */

// второй способ назначения событий и их обработчика
/* btn.addEventListener('click', () => {
    alert('Click');
}); // событие click выводит click после нажатия на кнопку

btn.addEventListener('click', () => {
    alert('Second Click');
}); */ // событие click выводит second click после нажатия на кнопку

let i = 0;
const deleteElement = (e) => { 
    console.log(e.target);
    console.log(e.type);
    /* i++;
    if (i === 1) { // если i === 1 то событие прекращается
        btn.removeEventListener('click', deleteElement); // возвращаем событие 
    } */
    /* e.target.remove(); */ 
};

/* btn.addEventListener('click', deleteElement ); */ // ссылаемся на функцию deleteElement, после клика кнопка удалятся
/* overlay.addEventListener('click', deleteElement); */

btns.forEach(btn => { // Этот код добавляет обработчик событий для каждого элемента <button>
    btn.addEventListener('click', deleteElement, {once: true}); //Для каждой кнопки добавляется событие click с указанием функции-обработчика deleteElement, Параметр { once: true } указывает, что обработчик выполнится только один раз и затем автоматически удалится.
});

// способы отменить стандартное поведение в браузере для пользователя

const link = document.querySelector('a');

// добавляем обработчик событий:
link.addEventListener('click', (event) => { 
    event.preventDefault(); // Метод preventDefault() отменяет стандартное поведение элемента

    console.log(event.target); // Выводит в консоль элемент, на который был совершен клик
});

/* btn.addEventListener('click', (e) => { */ // e название аргумента события
    /* console.log(e.target); */ // событие e выводит свою цель в консоль, в данном случае кнопку
    /* e.target.remove(); */ // событие e удаляет цель (кнопку)
    /* console.log('hover'); */
/* }); */ // событие mouseenter выводит в консоль hover при каждом наведении мышки на кнопкуыыыыы





