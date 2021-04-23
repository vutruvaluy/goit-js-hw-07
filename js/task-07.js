const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    spanEl.style.fontSize = inputEl.value + 'px';
    console.log(`Розмір шрифту "Абракадабра!" зараз ${spanEl.style.fontSize}`);
};