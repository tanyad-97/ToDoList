'use strict';

let list = document.getElementById('list');
let html = '';
let arrProducts = [
    {
        name: 'Молоко',
        edit: false,
        check: false
      },
    {
        name: 'Хлеб',
        edit: false,
        check: false
      },
    {
        name: 'Сыр',
        edit: false,
        check: false
      },
    {
        name: 'Чай',
        edit: false,
        check: false
      },
    {
        name: 'Фрукты',
        edit: false,
        check: false
      },
    {
        name: 'Овощи',
        edit: false,
        check: false

    }];
arrProducts.forEach((item) => {
    html += ` <li class="list__item"> ${item.name}</li>`;
});

list.innerHTML = html;


var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function(){
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function(){
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

