let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".logo-letter");

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = "fall 1s ease-in-out forwards";
        }, index * 500);
    });
});


const text = "Bienvenido";
const typingText = document.getElementById("typing-text");
let i = 0;

function type() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // Ajusta la velocidad de escritura aquí
    }
}

type();



