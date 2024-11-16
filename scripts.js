

const modal = document.querySelector(".modal")
const mascara_modal = document.querySelector(".mascara-modal")

function mostraModal(){
    modal.style.left = "50%"
    mascara_modal.style.visibility = "visible"
}

function esconderModal(){
    modal.style.left = "-30%"
    mascara_modal.style.visibility = "hidden"
}