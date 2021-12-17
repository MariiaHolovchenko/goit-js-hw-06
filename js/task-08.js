const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    

    if (email === "" || password === "") {
        alert("Все поля должны быть заполнены")
    }
    formData.forEach((value, name) => {
        console.log(`${name}: ${value}`);
        })
   
}
