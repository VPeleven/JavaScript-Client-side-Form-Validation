const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit' , (e) => {
    e.preventDefault()

    checkInputs()
})


function checkInputs () {
    let userNameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()

    if(!userNameValue.length) {
        error(username, 'Username cannot be a blank')
    } else {
        success(username)
    }
    if(!validateEmail(email)) {
        error(email, 'Invalid E-mail')
    } else {
        success(email)
    }
    if(!passwordValue.length) {
        error(password, 'Password cannot be a blank')
    } else {
        success(password)
    }
    if(!password2Value.length) {
        error(password2, 'Password cannot be a blank')
    }else if (passwordValue !== password2Value) {
        error(password2, 'Passwords does not match')
    } else {
        success(password2)
    }

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function error (input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

function success (input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success'
}
