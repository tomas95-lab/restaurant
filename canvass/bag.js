const products = document.querySelector(".products")

for (let i = 1; i < 20; i++) {
    products.innerHTML += `
    <div class="product product${i}">
    <h1 id="name">Name of the dish ${i}</h1>
    <div class="info">
    <div class="img${i}">
    <img src="./helpers/platillo.jpg" alt="">
    </div>
    <div class="options">
    <input type="number" min=0 class="numbers">
    <button class="reset" id="reset"> <i class="fas fa-sync-alt fa-fw"></i></button>
    </div>
    <div class="subtotal">
    <h1>Subtotal: <span id="subtotalsing">$0.00</span> </h1></div>
    <button  id="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    </div>`
}


const product = document.querySelectorAll(".product")
const options = document.querySelectorAll(".options")
const subtotalRes = document.getElementById("subtotal")
const sendCost = document.getElementById("sendCost")
const total = document.getElementById("total")

function subtotalCalculate(el) {
    var subtotal = el.children[2].children[0]
    subtotal.innerHTML = "$25.00"
    let num = el.children[1].children[0]
    num.value = 1

    num.addEventListener("change", (e) => {
        let price = 25.00
        let value = num.value
        let res = price * value

        subtotal.innerHTML = "$" + res + ".00"

        confirm(res)
    })
}

product.forEach(el => {
    //delete
    let children = el.children[1];
    let borrar = children.children[3]
    borrar.addEventListener("click", (e) => {
        products.removeChild(el)
    })

    //subtotal
    subtotalCalculate(children, children)
})

options.forEach(el => {
    let reset = el.children[1]
    let num = el.children[0]
    reset.addEventListener("click", (e) => {
        num.value = 1
        let subtotal = el.parentNode.childNodes[5].children[0]
        subtotal.innerHTML = "$25.00"
    })
})

function confirm(subtot) {
    let $send = 5.00
    let $subtot = subtot
    let $total = $subtot + $send
    sendCost.innerHTML = "$" + $send + ".00"
    total.innerHTML = "$" + $total + ".00"

}
total.innerHTML = `25.00`

const $confirm = document.getElementById("confirm")

$confirm.addEventListener("click", (e) => {
    console.log("la compra se realizo con exito")
    products.innerHTML = `<section class="succes">
    <h1> The order has been succesful
    </section>`
    $confirm.style.background = "green"
})