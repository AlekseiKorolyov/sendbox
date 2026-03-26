const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const getData = async () => {
    try {
        const nameOrId = searchInput.value.toLowerCase();
        const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrId}`);
        const data = await res.json();

        creatureName.textContent = `${data.name.toUpperCase()}`;
        creatureId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        types.innerHTML = data.types
            .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`).join(" ");
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;
    } catch (err) {
        resetData();
        alert("Creature not found");
        console.log(`Creature not found: ${err}`);
    }
}

const resetData = () => {
    creatureName.textContent = ``;
    creatureId.textContent = ``;
    weight.textContent = ``;
    height.textContent = ``;
    types.innerHTML = ``;
    hp.textContent = ``;
    attack.textContent = ``;
    defense.textContent = ``;
    specialAttack.textContent = ``;
    specialDefense.textContent = ``;
    speed.textContent = ``;
};

;

searchButton.addEventListener("click", getData);








/*
Создание приложения для поиска существ в RPG В этом проекте вы создадите приложение, которое будет искать существ из RPG-игры по имени или ID и отображать результаты пользователю. Для получения данных и изображений существ вы будете использовать API RPG Creature от freeCodeCamp. Примечание: Первые 13 шагов должны быть выполнены в файле index.html. Цель: Создать приложение, функционально аналогичное https://rpg-creature-search-app.freecodecamp.rocks. Пользовательские истории: У вас должен быть элемент ввода с идентификатором "search-input", который является обязательным. У вас должен быть элемент кнопки с идентификатором "search-button". У вас должен быть элемент с идентификатором "creature-name". У вас должен быть элемент с идентификатором "creature-id". У вас должен быть элемент с идентификатором "weight". У вас должен быть элемент с идентификатором "height". У вас должен быть элемент с идентификатором "types". У вас должен быть элемент с идентификатором "hp". У вас должен быть элемент с идентификатором "attack". У вас должен быть элемент с идентификатором "defense". У вас должен быть элемент с идентификатором "special-attack". У вас должен быть элемент с идентификатором "special-defense". У вас должен быть элемент с идентификатором "speed". Когда элемент #search-input содержит значение Red и нажат элемент #search-button, должно появиться всплывающее сообщение с текстом "Существо не найдено". Когда элемент #search-input содержит значение Pyrolynx и нажат элемент #search-button, значения в элементах #creature-name, #creature-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense и #speed должны быть PYROLYNX, #1 или 1, Weight: 42 или 42, Height: 32 или 32, 65, 80, 50, 90, 55 и 100 соответственно. Когда элемент #search-input содержит значение Pyrolynx и нажат элемент #search-button, внутри элемента #types должен быть добавлен один элемент, содержащий текст FIRE. Содержимое элемента #types должно очищаться между поисками. Когда элемент #search-input содержит значение 2 и нажат элемент #search-button, значения элементов #creature-name, #creature-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense и #speed должны быть AQUOROC, #2 или 2, Weight: 220 или 220, Height: 53 или 53, 85, 90, 120, 60, 70 и 40 соответственно. Когда элемент #search-input содержит значение 2 и нажат элемент #search-button, в элемент #types должны быть добавлены два элемента, содержащие текстовые значения WATER и ROCK соответственно. Содержимое элемента #types должно очищаться между поисками. Если элемент #search-input содержит недопустимое имя существа, и нажат элемент #search-button, должно появиться всплывающее сообщение с текстом «Существо не найдено». Если элемент #search-input содержит допустимый ID существа, и нажат элемент #search-button, пользовательский интерфейс должен быть заполнен правильными данными. Выполните пользовательские истории и пройдите все тесты ниже, чтобы завершить этот проект. Придайте ему свой собственный стиль. Удачного кодирования! Примечание: При запуске тестов будет небольшая задержка. Пожалуйста, подождите несколько секунд, пока тесты завершатся. Не обновляйте страницу до завершения тестов.
 */