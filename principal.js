const textoInput = document.querySelector(".input-texto");
const textoOutput = document.querySelector(".text-out");
const mensaje = document.querySelector(".mensaje");
const imagen = document.getElementById("img");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopy = document.getElementById("copy");

function encriptar() {
    let texto = textoInput.value;
    let textoEncriptado = "";
    if (found(texto)) {
        textoEncriptado = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("o", "ober")
            .replaceAll("a", "ai")
            .replaceAll("u", "ufat");
        textoOutput.innerHTML = textoEncriptado;
        mensaje.innerHTML = "Mensaje encriptado:";
    }
    found(texto);
}

function desencriptar() {
    let texto = textoInput.value;
    let textoDesencriptado = "";
    if (found(texto)) {
        textoDesencriptado = texto
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ober", "o")
            .replaceAll("ai", "a")
            .replaceAll("ufat", "u");
        textoOutput.innerHTML = textoDesencriptado;
        mensaje.innerHTML = "Mensaje desencriptado:";
    }
    found(texto);
}

function found(texto) {

    if (texto.length >= 1) {
        if(!textoValido(texto)){
            mensaje.innerHTML = "Mensaje ingresado no valido.<br> Solo se permiten letras <br>minusculas y sin acentos";
            textoOutput.innerHTML = "";
        };
        imagen.src = "/img/check-mark.png";
        btnCopy.style.visibility = "visible";
        return true;

    } else {
        mensaje.innerHTML = "Ningun mensaje fue encontrado";
        textoOutput.innerHTML = "Ingresa el texto que desees <br>encriptar o desencriptar.";
        imagen.src = "/img/not-found.png";
        btnCopy.style.visibility = "hidden";
        return false;
    }
}

function copy() {
    let texto = textoOutput.textContent;
    navigator.clipboard.writeText(texto);
}

function textoValido(texto) {
    let valido = /^[a-z0-9_ ]+$/;
    return (valido.test(texto));  
}