
const input = document.querySelector('input');
const lengthText = Number(input.dataset.length);

input.addEventListener('blur', checkInputText);

function checkInputText()
{
    const inputText = input.value.trim();

    if (!inputText.length)
    {
        input.id = 'validation-input';
        input.classList.remove('invalid');
        input.classList.remove('valid');
        alert('Введите корректное значение!');
    }
      else if(inputText.length === lengthText)
     {
    input.classList.add('valid');
    input.classList.remove('invalid');
    }
    else
    {
    input.classList.add('invalid');
    input.classList.remove('valid');
    }
};

