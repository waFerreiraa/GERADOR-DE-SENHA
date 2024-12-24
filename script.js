//criando as variaveis

let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;

}

//criando as funções

function generatePassword() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    const elemento = document.getElementById("container-password")

    elemento.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
  
} 