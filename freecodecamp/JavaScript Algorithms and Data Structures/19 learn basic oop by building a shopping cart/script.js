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

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.taxRate = 8.25;
    }

    addItem(id, products) {
        const product = products.find((item) => item.id === id);
        const { name, price } = product;
        this.items.push(product);

        const totalCountPerProduct = {};
        this.items.forEach(dessert => {
            totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
        })

        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

        currentProductCount > 1
            ? currentProductCountSpan.textContent = `${currentProductCount}x`
            : productsContainer.innerHTML += `
      <div class="product" id="dessert${id}">
        <p>
            <span class="product-count" id="product-count-for-id${id}"></span>
            ${name}
        </p>
        <p>${price}</p>
      </div>
      `;
    }

    getCounts () {
        return this.items.length;
    }

    calculateTaxes(amount) {
        return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }

    calculateTotal() {
        const subTotal = this.items.reduce((total, item) => total + item.price, 0);
        const tax = this.calculateTaxes(subTotal);
        this.total = subTotal + tax;
        cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
    (btn) => {
        btn.addEventListener("click", (event) => {
            cart.addItem(Number(event.target.id), products);
            totalNumberOfItems.textContent = cart.getCounts();
        });
    }
);

cartBtn.addEventListener("click", () => {
    isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
});















/*
Передайте методу .toFixed() число 2 в качестве аргумента. Это округлит число до двух десятичных знаков и вернет строку.

Чтобы это исправить, вы можете передать вызов .toFixed() (включая вычисление) функции parseFloat(). Это преобразует фиксированную строку обратно в число, сохраняя существующие десятичные знаки.

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




Шаг 15

У классов есть специальный метод constructor, который вызывается при создании нового экземпляра класса. Метод constructor — отличное место для инициализации свойств класса. Вот пример класса с методом constructor:
Пример кода

class Computer {
 constructor() {
  }
}

Добавьте пустой метод constructor в класс ShoppingCart.


  constructor() {

  }




Шаг 16

Ключевое слово `this` в JavaScript используется для ссылки на текущий объект. В зависимости от места его использования, то, на что оно ссылается, меняется. В случае класса оно ссылается на экземпляр создаваемого объекта. Вы можете использовать ключевое слово `this` для установки свойств создаваемого объекта.
Вот пример:

class Computer {
 constructor() {
  this.ram = 16;
 }
}

В вашем конструкторе используйте ключевое слово `this`, чтобы установить свойство `items` в пустой массив. Также установите свойство `total` равным 0, а свойство `taxRate` равным 8.25.


class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }
};




Шаг 17

Ваш класс ShoppingCart должен иметь возможность добавлять товары. Создайте пустой метод addItem, который принимает два параметра: id и products. Создание метода может выглядеть следующим образом:
Пример кода

class Computer {
 constructor() {
  this.ram = 16;
 }

 addRam(amount) {
  this.ram += amount;
 }
}

Первый параметр, id, — это идентификатор товара, который пользователь добавил в корзину. Второй параметр, products, — это массив объектов товаров. Использование параметра вместо прямой ссылки на существующий массив products сделает этот метод более гибким, если вы захотите добавить дополнительные списки товаров в будущем.


  addItem(id, products) {

  }




Шаг 18

Вам нужно найти товар, который пользователь добавляет в корзину. Помните, что у массивов есть метод `.find()`. В функции `addItem` объявите переменную `product` и присвойте ей значение, полученное при вызове метода `.find()` для массива `products`. В качестве функции обратного вызова для `.find()` передайте функцию, которая принимает один параметр `item` и возвращает значение, указывающее, строго ли свойство `id` переменной `item` совпадает с параметром `id`, переданным в `addItem`.


  addItem(id, products) {
    const product = products.find((item) => item.id === id);
  }




Шаг 19

Используйте константы и деструктуризацию для извлечения переменных name и price из product.


const {name, price} = product;




Шаг 20

Теперь вам нужно добавить товар в массив items корзины. Не забудьте использовать ключевое слово this.




Шаг 21

Теперь вам нужно общее количество каждого товара в корзине пользователя. Объявите переменную totalCountPerProduct и присвойте ей пустой объект.


    const totalCountPerProduct = {

    }




Шаг 22

Используйте метод `.forEach()` для перебора элементов items. Передайте пустую функцию обратного вызова, которая принимает один параметр — dessert.


this.items.forEach((dessert) => {});




Шаг 23

Вы на правильном пути! Однако давайте на мгновение остановимся на распространенной проблеме при работе с объектами в JavaScript. Когда вы пытаетесь получить доступ к свойству объекта, которого не существует, JavaScript возвращает undefined. Если затем вы попытаетесь выполнить арифметические операции над undefined, это может привести к неожиданным результатам, таким как NaN. Чтобы предотвратить это, вы можете использовать оператор || (логическое ИЛИ) для указания значения по умолчанию.
Пример кода

let scores = {};
let players = ["Alice", "Bob", "Charlie"];

players.forEach(player => {
 scores[player] = scores[player] || 0;
 });

 Теперь давайте применим эту концепцию к вашему объекту totalCountPerProduct в коллбэке forEach. Убедитесь, что каждое свойство dessert.id инициализировано должным образом. Инициализируйте totalCountPerProduct[dessert.id] значением по умолчанию 0, используя оператор ||.


     const totalCountPerProduct = {};
    this.items.forEach(dessert => {
      totalCountPerProduct[dessert.id] = totalCountPerProduct[dessert.id] || 0;
    })




Шаг 24

В функции обратного вызова forEach заключите присваивание в правой части кода totalCountPerProduct[dessert.id] || 0 в скобки (), чтобы обеспечить корректную оценку, а затем увеличьте значение на единицу.


totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;




Шаг 25

Теперь вам нужно подготовиться к обновлению отображения с новым товаром, добавленным пользователем. Объявите переменную currentProductCount и присвойте ей значение свойства totalCountPerProduct, соответствующее идентификатору product.


const currentProductCount = totalCountPerProduct[product.id];




Шаг 26

Вы еще не написали код для генерации HTML, но если товар уже добавлен в корзину пользователя, то будет найден соответствующий элемент, который вам понадобится. Используйте метод `.getElementById()`, чтобы получить соответствующий элемент — вы будете устанавливать значение `id` равным `product-count-for-id${product.id}`, поэтому используйте шаблонный литерал для запроса этого значения. Присвойте ваш запрос переменной `currentProductCountSpan`.


const currentProductCountSpan = document.getElementById(`product-count-for-id${product.id}`);




Шаг 27

Необходимо изменить поведение метода addItem в зависимости от того, находится ли товар уже в корзине или нет. Создайте тернарный оператор, который проверяет, находится ли текущий товар уже в корзине. Используйте undefined как для истинных, так и для ложных выражений, чтобы избежать синтаксической ошибки.


currentProductCount > 1 ? undefined : undefined;




Шаг 28

Для вашего истинного выражения, удалив значение undefined, вам необходимо обновить textContent объекта currentProductCountSpan, заменив его значением currentProductCount, за которым следует x. Для этого используйте шаблонный литерал.


currentProductCount > 1
    ? currentProductCountSpan.textContent = `${currentProductCount}x`
    : undefined;




Шаг 29

Для выражения ложного значения вам потребуется добавить новый HTML-код в ваш productsContainer. Начните с удаления undefined, затем используйте оператор присваивания и синтаксис шаблонного литерала, чтобы добавить div с классом product и идентификатором dessert${id} в свойство innerHTML объекта productsContainer.


    currentProductCount > 1
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div class="product" id="dessert${id}">

      </div>
      `;



Шаг 30

Внутри вашего div добавьте два элемента p. Установите текст второго элемента p равным значению переменной price.




Шаг 31

В первый элемент <p> добавьте элемент <span>. Присвойте элементу <span> класс `product-count` и идентификатор `product-count-for-id${id}`. Затем, после элемента <span>, добавьте в элемент <p> текст переменной `name`.


        <span class="product-count" id="product-count-for-id${id}"></span>
        ${name}




Шаг 32

Вашему классу ShoppingCart требуется еще некоторая функциональность, но сначала вам нужно протестировать написанный вами код. Вам потребуется создать новый объект ShoppingCart и присвоить его переменной. Вот пример создания экземпляра класса Computer из предыдущих примеров:
Пример кода

const myComputer = new Computer();

Объявите переменную cart и присвойте ей новый объект ShoppingCart. Обратите внимание на использование ключевого слова new при создании экземпляра объекта.


const cart = new ShoppingCart();




Шаг 33

Вам нужно получить все кнопки «Добавить в корзину», которые вы добавили в DOM ранее. Объявите переменную addToCartBtns и присвойте ей значение вызова метода getElementsByClassName() объекта документа, передав строку "add-to-cart-btn".


const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");




Шаг 34

Вам необходимо перебрать кнопки в переменной addToCartBtns. Однако метод .getElementsByClassName() возвращает коллекцию, у которой нет метода forEach. Используйте оператор расширения для переменной addToCartBtns, чтобы преобразовать её в массив. Затем используйте метод forEach для перебора элементов массива. Пока не передавайте функцию обратного вызова.


[...addToCartBtns].forEach();



Шаг 35

Добавьте свою функцию обратного вызова в метод forEach. Она должна принимать параметр btn. Затем в функции обратного вызова добавьте обработчик событий к btn. Обработчик событий должен отслеживать событие клика и принимать еще одну функцию обратного вызова с параметром события. Вторая функция обратного вызова должна быть пустой.


(btn) => {
  btn.addEventListener("click", (event) => {});
}




Шаг 36 В обработчике событий вызовите метод `.addItem()` объекта корзины и передайте в него `event.target.id`. Помните, что `id` здесь будет строкой, поэтому вам нужно преобразовать его в число. В качестве второго аргумента передайте массив товаров.


cart.addItem(Number(event.target.id), products);




Шаг 37

Ваша корзина в данный момент не отображается на веб-странице. Чтобы сделать ее видимой, начните с добавления обработчика событий к переменной cartBtn, отслеживающего событие клика. Функция обратного вызова не требует никаких параметров.


cartBtn.addEventListener("click", () => {});




Шаг 38

Начните с инвертирования значения isCartShowing. Помните, что для инвертирования значения логического значения можно использовать логический оператор отрицания !. Присвойте инвертированное значение переменной isCartShowing.


isCartShowing = !isCartShowing;




Шаг 39

Теперь присвойте переменной showHideCartSpan значение textContent, полученное в результате тернарного выражения, проверяющего, истинно ли значение isCartShowing. Если да, установите textContent в значение "Скрыть" "Hide", в противном случае — в значение "Показать" "Show".


showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";




Шаг 40

Наконец, обновите свойство display объекта style переменной cartContainer, заменив его на другой тернарный оператор, который проверяет, является ли isCartShowing истинным. Если да, установите свойство display в значение "block", в противном случае — в значение "none". Теперь вы должны видеть свою корзину и добавлять в нее товары.


cartContainer.style.display = isCartShowing ? "block" : "none";




Шаг 41

Вам нужен способ получить доступ к общему количеству товаров в корзине. Лучший способ сделать это — добавить еще один метод в ваш класс ShoppingCart, вместо прямого доступа к массиву items. Добавьте метод getCounts в класс ShoppingCart. Он должен возвращать количество товаров в массиве items.


getCounts () {
  return this.items.length;
}




Шаг 42

Теперь вы можете обновить общее количество товаров на веб-странице. Присвойте значение метода .getCounts() вашего объекта cart значению textContent переменной totalNumberOfItems.


totalNumberOfItems.textContent = cart.getCounts();




Шаг 43

Вам также необходимо обновлять общую стоимость корзины, когда пользователь добавляет товар. Создайте метод calculateTotal в классе ShoppingCart. В этом методе объявите переменную subTotal и используйте метод reduce для массива items, чтобы вычислить сумму свойства price каждого товара в массиве. Используйте total и item в качестве параметров для вашего коллбэка. Не забудьте установить начальное значение в методе reduce.


const subTotal = this.items.reduce((total, item) => total + item.price, 0);




Шаг 44

Часть общей стоимости будет включать налог, поэтому вам также необходимо его рассчитать. Создайте метод calculateTaxes в классе ShoppingCart. Этот метод должен принимать параметр amount.


calculateTaxes(amount) {

}




Шаг 45

Ваш метод calculateTaxes должен возвращать значение taxRate (разделенное на 100 для перевода в проценты), умноженное на параметр amount. Для большей ясности заключите вычисление taxRate / 100 в скобки.


return (this.taxRate / 100) * amount;




Шаг 46

Из-за особенностей хранения и обработки чисел компьютерами, вычисления с десятичными числами могут приводить к некоторым странным результатам. Например, 0,1 + 0,2 не равно 0,3. Это происходит потому, что компьютеры хранят десятичные числа в виде двоичных дробей, а некоторые двоичные дроби не могут быть точно представлены в виде десятичных дробей. Мы хотим очистить результат вычисления. Заключите вычисление в скобки (не включайте оператор return!) и вызовите метод .toFixed(). Передайте методу .toFixed() число 2 в качестве аргумента. Это округлит число до двух десятичных знаков и вернет строку.




Шаг 47

Проблема с возвратом строки функцией .toFixed() заключается в том, что вам нужно иметь возможность выполнять вычисления с налоговой ставкой. Чтобы это исправить, вы можете передать вызов .toFixed() (включая вычисление) функции parseFloat(). Это преобразует фиксированную строку обратно в число, сохраняя существующие десятичные знаки. Передайте ваш вызов .toFixed() функции parseFloat().


return parseFloat(((this.taxRate / 100) * amount).toFixed(2));




Шаг 48

Объявите переменную tax и присвойте ей значение, полученное при вызове вашего нового метода .calculateTaxes(), передав в качестве аргумента переменную subTotal.


const tax = this.calculateTaxes(subTotal);




Шаг 49

Обновите total, чтобы она равнялась subTotal и tax.


this.total = subTotal + tax;




Шаг 50

В этом методе вы также обновите HTML-код. Установите значение textContent элемента cartSubTotal равным значению subTotal с фиксированным количеством знаков после запятой (2 знака после запятой). Используйте синтаксис шаблонных литералов, чтобы добавить знак доллара в начало значения.


cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;









 */