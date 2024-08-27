/*Jueguito del adivinador*/

let nuemerosecreto = 0;
let intentos = 0;
let listadnumeros = [];
let numeromax = 10;

function Asignartextoelemento(elemento, texto){
    let elemento1 = document.querySelector(elemento);
    elemento1.innerHTML = texto;
    return;
}

function Verificar(){

    let numerousuario = parseInt(document.getElementById('V').value);

    if (numerousuario === nuemerosecreto){
        Asignartextoelemento ('P',`Acertaste!! y en solo ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
        if (numerousuario > nuemerosecreto){
            Asignartextoelemento ('p','El numero secreto es menor');
        
        } else {
            Asignartextoelemento ('p','El numero secreto es mayor');

        }
        limpiarcaja();
        intentos++;
    }
   
    return;
}

function condicionesiniciales(){
    Asignartextoelemento('h1','Juego del número secreto');
    Asignartextoelemento('p', `Indica un numero entre 1 y ${numeromax}`);
    nuemerosecreto = numerosecreto();
    intentos = 1;

}

function reiniciarjuego(){
    
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function limpiarcaja(){
  document.querySelector('#V'). value = '';
   
}

function numerosecreto() {
    let generadordenumero = Math.floor (Math.random()*numeromax) +1;

    console.log (generadordenumero);
    console.log (listadnumeros);

    
    if(listadnumeros.length == numeromax){
        Asignartextoelemento ('p', 'Ya has usado todos tus intentos posibles');

    }else{
        
        if(listadnumeros.includes(generadordenumero)){
            return numerosecreto();
        
        }else{
            listadnumeros.push(generadordenumero);
            return generadordenumero;
        }
    }
}

condicionesiniciales();