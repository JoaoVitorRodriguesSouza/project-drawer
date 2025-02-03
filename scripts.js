const luck = document.querySelector("button")
const back = document.querySelector(".mascara")
const box = document.querySelector(".show")
const end = document.querySelector(".total")

function generateNumber() {

    box.style.visibility = "visible"

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    end.innerHTML = result
    back.style.visibility = "visible"
}

function clickMask() {
    box.style.visibility = "hidden"
    back.style.visibility = "hidden"
}
