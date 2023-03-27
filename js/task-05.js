
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
const defaultText = span.textContent;

input.addEventListener('input', onInput);

function onInput(evt)
{
   span.textContent = evt.currentTarget.value; 
    if (!input.value) {
       span.textContent = defaultText;
   } 
};


