const input = document.querySelector('input#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', (item) => {
    if (item.target.value.length != dataLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
});

