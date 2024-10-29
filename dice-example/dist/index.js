"use strict";
/**
 * Målet med spelet är att få en stege
 *
 * 1. Kasta tärning och slumpa en siffra
 * 2. Visa tärningskast
 * 3. Jämföra om tärningens number är samma som nuvarande mål
 * 4. Om det är samma så "lys upp" rätt tärning i stegen
 * 5. Kolla om hela stegen är klar, visa att användaren vann
 * 6. Kasta igen om inte vinst
 */
const buttonElem = document.querySelector("button");
const diceElem = document.querySelector("#diceElem");
let throws = 0; // Antal tärningskast
let currentGoal = 1; // Nuvarande tärningsmål
let lastThrow = 1; // Vårt senaste tärningskast
const dice = {
    sides: 6,
    throw() {
        return Math.ceil(Math.random() * dice.sides); // Slumpar ett tal mellan 1 och 6
    },
};
function resetUI(numberOfDices) {
    var _a;
    for (let i = 0; i <= numberOfDices; i++) {
        (_a = document.querySelector(`.dots-${i}`)) === null || _a === void 0 ? void 0 : _a.classList.add("faded");
    }
}
buttonElem === null || buttonElem === void 0 ? void 0 : buttonElem.addEventListener("click", () => {
    let result = dice.throw(); // Kasta tärning och spara resultatet
    // Visa tärningen i gränsnittet
    diceElem === null || diceElem === void 0 ? void 0 : diceElem.classList.remove(`dots-${lastThrow}`); // Ta bort förgående CSS-klass
    diceElem === null || diceElem === void 0 ? void 0 : diceElem.classList.add("dice", `dots-${result}`);
    throws++;
    if (result === currentGoal) {
        const diceDotsElem = document.querySelector(`.dots-${result}`);
        diceDotsElem === null || diceDotsElem === void 0 ? void 0 : diceDotsElem.classList.remove("faded");
        if (currentGoal < 6) {
            currentGoal++;
        }
        else if (currentGoal === 6) {
            console.log(`Woho, du vann! Antal kast: ${throws}`);
            throws = 0;
            currentGoal = 1;
            resetUI(6);
        }
    }
    lastThrow = result;
});
