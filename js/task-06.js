const input = document.querySelector('input#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', (item) => {
    if (item.target.value.length != dataLength) {
        f1();
       } else {
        f2();
    }
});

const f1 = (add, remove) => {
    add = input.classList.add('invalid');
    remove = input.classList.remove('valid');
};
const f2 = (add, remove) => {
    add = input.classList.add('valid');
    remove = input.classList.remove('invalid');
}