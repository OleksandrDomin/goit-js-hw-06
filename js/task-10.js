function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('div#boxes');
let numberOfItaration = 0;

buttonCreate.addEventListener('click', onCreate);
buttonDestroy.addEventListener('click', onDestroy);

function onCreate() {
  numberOfItaration = Number(input.value);
  let size = 30;

  for (let i = 0; i < numberOfItaration; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    box.append(divElement);
    size += 10;
  }
};

function onDestroy() {
  box.innerHTML = '';
};



