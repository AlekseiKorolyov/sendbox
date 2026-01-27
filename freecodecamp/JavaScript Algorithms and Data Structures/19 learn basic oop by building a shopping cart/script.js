const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
    {
        id: 1,
        name: "Vanilla Cupcakes (6 Pack)",
        price: 12.99,
        category: "Cupcake",
    }
];

























/*
Шаг 1

Вы будете создавать приложение для корзины покупок. HTML и CSS уже предоставлены, но вам потребуется написать JavaScript, чтобы сделать страницу интерактивной. Для начала вам нужно получить некоторые элементы из DOM. Начните с использования document.getElementById() для получения элементов #cart-container, #products-container и #dessert-card-container. Сохраните их в переменных с именами cartContainer, productsContainer и dessertCards соответственно. Поскольку они не будут изменяться, не забудьте объявить их как const.




Шаг 2 Теперь вам нужно получить две кнопки. Продолжая шаблон, получите элементы #cart-btn и #clear-cart-btn. Сохраните их в переменных с именами cartBtn и clearCartBtn соответственно.





Шаг 3

Далее необходимо получить итоговые суммы. Получите элементы #total-items, #subtotal, #taxes и #total. Сохраните их в переменных с именами totalNumberOfItems, cartSubTotal, cartTaxes и cartTotal соответственно.




Шаг 4

Последний элемент, который нужно получить, — это элемент #show-hide-cart. Сохраните его в переменной с именем showHideCartSpan. Затем используйте let для объявления переменной с именем isCartShowing и установите для неё значение false.




Шаг 5

Корзина покупок малополезна без товаров. Объявите переменную products и присвойте ей пустой массив. Использование массива позволит вам хранить несколько товаров.




Шаг 6

Теперь вам нужно начать добавлять товары. Прежде чем это сделать, необходимо продумать структуру данных о товарах. Каждому товару потребуется уникальный идентификатор, чтобы отличать его от других товаров, цена, чтобы люди знали, сколько он стоит, и название, чтобы люди знали, что они покупают. Также следует добавить категорию к каждому товару.
Добавьте объект в массив products. Присвойте этому объекту свойство id, равное числу 1, свойство name, равное строке "Vanilla Cupcakes (6 Pack)", свойство price, равное числу 12.99, и свойство category, равное строке "Cupcake".


  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  }






 */