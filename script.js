/*====================================================
  V CONGRESO INTERNACIONAL DE FLAGRANCIA
  COUNTDOWN
====================================================*/

// Fecha del evento
const fechaEvento = new Date("2026-08-12T08:30:00").getTime();

// Elementos
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

//====================================================
// Actualizar valor con animación
//====================================================

function actualizarElemento(elemento, valor){

    const nuevoValor = String(valor).padStart(2,"0");

    if(elemento.textContent !== nuevoValor){

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(10px)";

        setTimeout(()=>{

            elemento.textContent = nuevoValor;

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        },150);

    }

}

//====================================================
// Cuenta regresiva
//====================================================

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        actualizarElemento(dias,0);
        actualizarElemento(horas,0);
        actualizarElemento(minutos,0);
        actualizarElemento(segundos,0);

        clearInterval(intervalo);

        return;

    }

    const totalSegundos = Math.floor(diferencia / 1000);

    const d = Math.floor(totalSegundos / 86400);

    const h = Math.floor((totalSegundos % 86400) / 3600);

    const m = Math.floor((totalSegundos % 3600) / 60);

    const s = totalSegundos % 60;

    actualizarElemento(dias,d);

    actualizarElemento(horas,h);

    actualizarElemento(minutos,m);

    actualizarElemento(segundos,s);

}

//====================================================
// Animación CSS
//====================================================

[dias,horas,minutos,segundos].forEach(item=>{

    item.style.transition = "all .35s ease";

});

//====================================================

actualizarContador();

const intervalo = setInterval(actualizarContador,1000);
