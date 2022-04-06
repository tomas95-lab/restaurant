const password = document.getElementById("password")
const confirmPassword = document.getElementById("passwordConfirm")
const email = document.getElementById("userName")
const signInBtn = document.getElementById("signIn")
const main = document.getElementById("main")
let ls = localStorage
const alerta = document.createElement("div")
main.appendChild(alerta)


alerta.classList.add("alerta")

function check() {
    if (password.value.length < 4) {
        alerta.innerHTML = `<p>Enter more than 4 characters</p>`
        alerta.style.display = "flex"
        password.style.borderColor = "red"
    } else if (password.value != confirmPassword.value) {
        confirmPassword.style.borderColor = "red"
        password.style.borderColor = "red"

        alerta.innerHTML = `<p>Passwords do not match</p>`
        alerta.style.display = "flex"
    } else if (password.value == "" || confirmPassword.value == "" || email.value == "") {
        alerta.innerHTML = `Fill in all the fields`
        alerta.style.display = "flex"
    } else {
        alerta.style.display = "none"
        alerta.innerHTML = ``
    }
    ls.setItem("name", email.value)
    ls.setItem("password", confirmPassword.value)
}

signInBtn.addEventListener("click", check)