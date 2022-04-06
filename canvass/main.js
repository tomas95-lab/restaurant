const backgroundIntro = document.querySelector(".background-intro")
let num = 1
setInterval(function() {
    if (num > 3) {
        num = 1
    }
    backgroundIntro.style.background = `url(./helpers/banner_${num++}.jpg)`
}, 4000)
const userBtn = document.getElementById("user")

const user = document.querySelector(".email")
const password = document.querySelector(".password")
const loginContainer = document.querySelector(".login")
const loginBtn = document.getElementById("loginBtn")
let ls = localStorage
const alerta = document.createElement("div")
loginContainer.appendChild(alerta)
alerta.classList.add("alerta")
userBtn.addEventListener("click", (e) => {
    loginContainer.style.display = "flex"

})
loginBtn.addEventListener("click", (e) => {
    e.preventDefault(true)
    if (ls.getItem("name") == email.value) {
        loginContainer.style.display = "none"
    } else {
        alerta.style.display = "flex"
        alerta.innerHTML = `<p>Account didnt found`
    }
})

const addBtn = document.querySelectorAll(".add")
const bag = document.getElementById("bag")
const count = document.createElement("span")
bag.appendChild(count)

count.classList.add("count")
let products = []

const dish = document.querySelectorAll(".dish")
dish.forEach(el => {
    let child = el.children
    let nameOfDish = child[1].innerHTML
    let addBtn = child[3].children[0]
    addBtn.addEventListener("click", (e) => {
        products.push(nameOfDish)
        count.innerHTML = products.length
        count.style.display = "flex"
        ls.setItem("product", products)
        console.table(products)
    })
})