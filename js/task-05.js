const refs = {
    input: document.querySelector('.js-input'),
    name: document.querySelector('.js-name'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.name.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.name.textContent = 'незнакомец';
    }
};