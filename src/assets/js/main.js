'use strict';

var arrProducts = [
    {
        nameProduct: "Dorji bari long Style",
        price: "$199.99",
        publData: "2019-10-17"
    }
    , {
        nameProduct: "Dorji  East long Style",
        price: "$199.99",
        publData: "2019-10-17"
    }
    , {
        nameProduct: "Dorji bari Style",
        price: "$199.99",
        publData: "2019-10-17"
    }
    , {
        nameProduct: "Dorji bari East Style",
        price: "$199.99",
        publData: "2019-10-17"
    }];

let toDoList = document.getElementById('toDoList');
let html = '';
for (let i = 0; i < arrProducts.length; i++) {
    const data = arrProducts[i];
    html+=` <li> ${arrProducts[i].nameProduct}
            Цена ${arrProducts[i].price}
            Дата публикации ${arrProducts[i].publData}</li>`;
}
toDoList.innerHTML = html;

