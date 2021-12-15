const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(event) {
    event.preventDefault();

    
    // const formEl = event.currentTarget.elements;
    // const email = formEl.email.value;
    // const password = formEl.password.value;

    // const formaData = {
    //     email, password,
    // };
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        if (value === "" || value === null) {
            alert("Все поля должны быть заполнены")
        }
        console.log(name, value)
    })
}
