
const abrir = document.querySelector(".bag-button")
const popup = document.querySelector("dialog")
const sair = document.querySelector(".sair")

abrir.onclick = function (){
  popup.showModal()
}

sair.onclick = function (){
    popup.close()
}

popup.addEventListener('click', (event) => {
    if (event.target === popup){
        popup.close();
    }
})
