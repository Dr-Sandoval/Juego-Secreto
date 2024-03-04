let numeroSecreto = 0;
intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

condicionesIndiciales();


function asignarTextoHtml(elemento,texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoHtml("p",(`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`));
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoHtml( "p",("El número secreto es menor"));
    } else {
        asignarTextoHtml("p",("El número secreto es mayor"));
    }
    intentos++;
    limpiarCaja();

    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIndiciales() {
    asignarTextoHtml("h1","Juego del número secreto");
    asignarTextoHtml("p",`Indica un número del 1 al ${numeroMaximo}.`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
   
    if (listaNumerosSorteados.length == intentosMaximos) {
        asignarTextoHtml("p",`Llegaste al numero de ${intentosMaximos} intentos`);  
    } else {

    //Si el número generado está incluido en la lista.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIndiciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}





