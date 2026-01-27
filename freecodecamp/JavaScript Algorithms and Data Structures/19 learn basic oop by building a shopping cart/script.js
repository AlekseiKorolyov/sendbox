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
    },
    {
        id: 2,
        name: "French Macaron",
        price: 3.99,
        category: "Macaron",
    },
    {
        id: 3,
        name: "Pumpkin Cupcake",
        price: 3.99,
        category: "Cupcake",
    },
    {
        id: 4,
        name: "Chocolate Cupcake",
        price: 5.99,
        category: "Cupcake",
    },
    {
        id: 5,
        name: "Chocolate Pretzels (4 Pack)",
        price: 10.99,
        category: "Pretzel",
    },
    {
        id: 6,
        name: "Strawberry Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },
    {
        id: 7,
        name: "Chocolate Macarons (4 Pack)",
        price: 9.99,
        category: "Macaron",
    },
    {
        id: 8,
        name: "Strawberry Pretzel",
        price: 4.99,
        category: "Pretzel",
    },
    {
        id: 9,
        name: "Butter Pecan Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },
    {
        id: 10,
        name: "Rocky Road Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },
    {
        id: 11,
        name: "Vanilla Macarons (5 Pack)",
        price: 11.99,
        category: "Macaron",
    },
    {
        id: 12,
        name: "Lemon Cupcakes (4 Pack)",
        price: 12.99,
        category: "Cupcake",
    }

];

products.forEach(
    ({name, id, price, category}) => {
        dessertCards.innerHTML += `
    <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
            id="${id}" 
            class="btn add-to-cart-btn">Add to cart</button>
    </div>
    `;
    }
);

class ShoppingCart {};

























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




Шаг 7

Следуя той же структуре данных, добавьте товары из этой таблицы (в указанном порядке) в ваш массив товаров. Увеличивайте идентификатор каждого товара, отсчитывая в большую сторону.
name	price	category
French Macaron	3.99	Macaron
Pumpkin Cupcake	3.99	Cupcake
Chocolate Cupcake	5.99	Cupcake
Chocolate Pretzels (4 Pack)	10.99	Pretzel
Strawberry Ice Cream	2.99	Ice Cream
Chocolate Macarons (4 Pack)	9.99	Macaron
Strawberry Pretzel	4.99	Pretzel
Butter Pecan Ice Cream	2.99	Ice Cream
Rocky Road Ice Cream	2.99	Ice Cream
Vanilla Macarons (5 Pack)	11.99	Macaron
Lemon Cupcakes (4 Pack)	12.99	Cupcake




Шаг 8

Теперь, когда у вас есть список товаров, вы можете использовать JavaScript для их вставки в HTML. При таком подходе, если вы решите добавить больше товаров, HTML автоматически это отразит. Начните с вызова метода `.forEach` для вашего массива products. Используйте стрелочный синтаксис для создания пустой функции обратного вызова.


products.forEach(() => {});




Шаг 9

Помните, что вы можете использовать деструктуризацию для извлечения нескольких значений из массива или объекта в одном операторе. В качестве первого параметра вашей функции обратного вызова деструктурируйте свойства name, id, price и category из переданного объекта.


products.forEach(
  ({name, id, price, category}) => {}
);




Шаг 10

Вам необходимо отобразить доступные товары в вашем HTML-коде. Начните с использования оператора присваивания сложения, чтобы добавить пустую строку шаблона в свойство innerHTML переменной dessertCards.


dessertCards.innerHTML += ``;




Шаг 11

В вашем шаблоне создайте элемент div с классом dessert-card. Внутри этого div создайте элемент h2 и задайте ему текст, соответствующий переменной name.


dessertCards.innerHTML += `
    <div class="dessert-card">
    <h2>${name}</h2>
    </div>
    `;




Шаг 12

После элемента h2 создайте два элемента p. Первому присвойте класс dessert-price и установите текст в виде знака доллара "$", за которым следует значение переменной price. Второму присвойте класс product-category и текст "Category: ", за которым следует значение переменной category.


        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>




Шаг 13

Наконец, после элементов <p> создайте элемент button. Присвойте ему id, равный значению переменной id, класс btn add-to-cart-btn и используйте текст "Add to cart".


<button id="${id}" class="btn add-to-cart-btn">Add to cart</button>




Шаг 14

Вы уже знакомы с HTML-классами, но в JavaScript тоже есть классы. В JavaScript класс — это своего рода шаблон для создания объектов. Он позволяет определить набор свойств и методов, а также создавать новые объекты с этими свойствами и методами. Ключевое слово `class` используется для объявления класса. Вот пример объявления класса `Computer`:
Пример кода

class Computer {};

Объявите класс `ShoppingCart`.


class ShoppingCart {};










 */