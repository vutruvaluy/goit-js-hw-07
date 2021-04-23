const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    inputEl.classList.add('valid');
    if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.replace('invalid', 'valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};