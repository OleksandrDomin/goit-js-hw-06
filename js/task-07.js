const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const startNumber = (Number(inputEl.getAttribute('min')) + Number(inputEl.getAttribute('max')))/2; 
spanText.style.fontSize = startNumber + "px"; 

inputEl.addEventListener('input', changeSpanText);

function changeSpanText() {
    spanText.style.fontSize = inputEl.value + "px"; 
};
