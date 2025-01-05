//Desestructuracion de datos.
import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del DOM.
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// Agregamos un evento Click a cada enlace.
enlaces.forEach( function(enlace){
  
  enlace.addEventListener('click', function(){
   
    if(this.classList.contains('active')){
      this.classList.remove('active');
      limpiarContenido();
      return;
    }
    
    // Remover la clase "active" de todos los enlaces.
    enlaces.forEach(function(enlace){
      enlace.classList.remove('active');
    });

    //Agregar la clase active al enlace actual.
    this.classList.add('active');

    //Obtener el contenido correspondiente segun el enlace.
    let contenido = obtenerContenido(this.textContent);

    //Mostramos el contenido.
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;    

  });

});

function obtenerContenido(enlace){
  //Funcion para traer la informacion correcta desde ciudades.js
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres,
  };
  
  return contenido[enlace];
}

function limpiarContenido(){
  tituloElemento.innerHTML = '';
  subtituloElemento.innerHTML = '';
  parrafoElemento.innerHTML = '';
}
