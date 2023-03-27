const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const chengeSpan = document.querySelector('#value');

incrementBtn.addEventListener('click', plusOne);
decrementBtn.addEventListener('click', minusOne);

// Не робив змінну "0", а відразу привів до числа значення у спану
let counterValue = Number(chengeSpan.textContent);

function plusOne() {
    counterValue += 1;
    chengeSpan.textContent = counterValue;
}

function minusOne() {
    counterValue -= 1;
    chengeSpan.textContent = counterValue;
}

