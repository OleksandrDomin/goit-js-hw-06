const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', onSubmit);

function onSubmit(evt)
{
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (!(password.value.length && email.value.length))
    {
        alert("Все поля формы должны быть заполнены!");
        return;
        }
    const data = {
        email: email.value,
        password: password.value
    };
    console.log(data);
    document.getElementById(userForm.reset());
};
