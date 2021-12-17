const input = document.querySelector('input#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', (item) => {
    if (item.target.value.length != dataLength) {
        f('invalid', 'valid');
       } else {
        f('valid', 'invalid');
    }
});

const f = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};
