//Desestructuracion de datos.
import { barcelona, roma, paris, londres } from './ciudades.js';

/*
  "import" Esta declaración se usa para importar funciones, objetos u otros datos de otros archivos o módulos. 
  { barcelona, roma, paris, londres }: Esto es una desestructuración de objetos, que permite extraer propiedades específicas 
  de un objeto y asignarlas a variables.
*/

// Obtener los elementos del DOM.
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

/*
  El añadido de una funcion como argumento, (parametro,) de un metodo o similar es una practicada llamada: "Funciones de Orden Superior".

  Esto esta estrechamente relacionado con las "First-class Function". Se dice que un lenguaje tiene "First-class Function"
  cuando dichas funciones de dicho lenguaje pueden ser tratadas como cualquier otra variable.
  
  Mas informacion: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
*/

// Agregamos un evento Click a cada enlace.
enlaces.forEach( function(enlace){
  
  enlace.addEventListener('click', function(){

    /*
      //EXPLICACION TEORICA del uso del forEach por medio Funcion Anonima.
      array.forEach(function(elemento, indice, array) {
        //Hacer algo con elemento
      });
      
      - elemento: El elemento actual del array.

      - indice (opcional): El índice del elemento actual.

      - array (opcional): El array completo que se está recorriendo.
    */
   
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