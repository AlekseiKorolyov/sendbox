const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");


clearBtn.addEventListener("click", () => results.innerText = "");
checkBtn.addEventListener("click", () => {
    let input = userInput.value;

    const regex1 = /^1 ([1-9][0-9][0-9])-([0-9][0-9][0-9])-([0-9][0-9][0-9][0-9])$/g;
    const regex2 = /^1 \(([1-9][0-9][0-9])\) ([0-9][0-9][0-9])-([0-9][0-9][0-9][0-9])$/g;
    const regex3 = /^1\(([1-9][0-9][0-9])\)([0-9][0-9][0-9])-([0-9][0-9][0-9][0-9])$/g;
    const regex4 = /^1 ([1-9][0-9][0-9]) ([0-9][0-9][0-9]) ([0-9][0-9][0-9][0-9])$/g;
    const regex5 = /^([1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/g;
    const regex6 = /^([1-9][0-9][0-9])-([0-9][0-9][0-9])-([0-9][0-9][0-9][0-9])$/g;
    const regex7 = /^\(([1-9][0-9][0-9])\)([0-9][0-9][0-9])-([0-9][0-9][0-9][0-9])$/g;
    const regexArray = [regex1, regex2, regex3, regex4, regex5, regex6,regex7];

    const result = (input, num) => num.some((regex) => regex.test(input));

    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }

    results.textContent = result(userInput.value, regexArray)
        ? `Valid US number: ${userInput.value}`
        : `Invalid US number: ${userInput.value}`;
});