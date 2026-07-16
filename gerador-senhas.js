//Condições da senha
let tamanhoDaSenha = 12;
let usarMaiusculas = true
let usarMinusculas = true
let usarNumeros = true
let usarSimbolos = false

//Letras
let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let letrasMinusculas = "abcdefghijklmnopqrstuvhxyz"

//Números e símbolos
let numeros = "1234567890"
let simbolos = "!@#$%&*"

let caracteresPermitidos = ""

//Montar a lista de caracteres permitidos
if(usarMaiusculas == true){
 caracteresPermitidos += letrasMaiusculas
}

if(usarMinusculas == true){
    caracteresPermitidos += letrasMinusculas
}

if(usarNumeros == true){
    caracteresPermitidos += numeros
}

if(usarSimbolos == true){
    caracteresPermitidos += simbolos
}

//Gerar a senha
let senha = ""
for(let caracteresGerados = 0; caracteresGerados < 12; caracteresGerados++){
    let posicaoAleatoria = Math.floor(Math.random() * caracteresPermitidos.length);
    let caractere = caracteresPermitidos[posicaoAleatoria];
    senha += caractere;
}

console.log(senha)