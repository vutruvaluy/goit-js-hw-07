const counterValue = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    }
};
const allButtons = document.querySelectorAll('button');
const value = document.querySelector('span');
const decrementBtn = allButtons[0];
const incrementBtn = allButtons[1];

decrementBtn.addEventListener('click', () => {
    console.log('Кликнули на декремент');

    counterValue.decrement();
    console.log(counterValue);
    value.textContent = counterValue.value;
});
 incrementBtn.addEventListener('click', () => {
    console.log('Кликнули на инкремент');
    
    counterValue.increment();
    console.log(counterValue);
    value.textContent = counterValue.value;
 });