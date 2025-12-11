const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {

    const romanMap = [
        {value: 1000, simbol: "M" },
        {value: 900, simbol: "CM" },
        {value: 500, simbol: "D" },
        {value: 400, simbol: "CD" },
        {value: 100, simbol: "C" },
        {value: 90, simbol: "XC" },
        {value: 50, simbol: "L" },
        {value: 40, simbol: "XL" },
        {value: 10, simbol: "X" },
        {value: 9, simbol: "IX" },
        {value: 5, simbol: "V" },
        {value: 4, simbol: "IV" },
        {value: 1, simbol: "I" }
    ];

    let result = "";
    let num = number.value;

    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].simbol;
            num -= romanMap[i].value;
            output.innerText = result;
        }
    }

    if (number.value === "") {
        output.innerText = "Please enter a valid number";
    } else if (number.value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (number.value >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
    }
});