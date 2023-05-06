
let slideElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slide.oninput = function(){
    sizePassword.innerHTML = this.value;

}

function generatePassword(){

    let pass ="";

    for( let i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(password);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    alert("Senha copiada com sucesso!");
  }