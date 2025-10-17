
/*JAVASCRIPT ES INTERPRETADO POR EL NAVEGADOR DE FORMA DIRECTA
NO TIENE UN COMPILADOR COMO EN JAVA*/

//JS ES ORIENTADO A OBJETOS
/*JS PUEDE CONECTARSE A LOS OBJETOS DE SU ENTORNO 
PARA TENER CONTROL PROGRAMATICO SOBRE ELLOS*/

//JAVA CORRE EN MAQUINA VIRTUAL JVM
/*JS VIVE DENTRO DEL NAVEGADOR, EL PRINCIPAL PROPOSITO DE JS
ES MANIPULAR EL CONTENIDO DE LA PAGINA WEB(DOM)*/

//JS PERMITE CAMBIAR EL HTML Y CSS EN TIEMPO REAL

//JS CAMBIA LA APARIENCIA DE LA WEB(DOM)
/* JS NODE.JS PUEDE RESPONDER SOLICITUDES PERSONALIZADAS
SOBRE EL CODIGO ESCRITO EN EL NAVEGADOR*/

/*EN JS NO ES NECESARIO DECLARAR TODAS LAS VARIABLES
LAS VARIABLES,PARAMETROS Y LOS TIPOS DE RETORNO
NO SE TIPIFICAN EXPLICITAMENTE COMO EN JAVA*/

/*JS TIENE UN MODELO BASADO EN PROTOTIPOS, QUE PROPORCIONA
HERENCIA DINAMICA, QUIERE DECIR QUE LO QUE SE HEREDA
PUEDE VARIAR EN OBJETOS INDIVIDUALES*/

/*JS PERMITE QUE LAS FUNCIONES PUEDAN SER PROPIEDADES
DE OBJETOS EJECUTANDOSE CON METODOS DEBILMENTE TIPADOS*/




//EL PRIMER HOLA MUNDO, SE PEGA EN CONSOLE DEL NAVEGADOR
    (function () {
        "use strict";
        function greetMe(tuNombre) {
            alert("hola " + tuNombre);
        }


        greetMe("mundo");
    })();
 
 
//DECLARACIONES

var x = "declara una variable, opcional iniciar el valor";

let x= "delcara una variable local con ambito de bloque, opcional inicia un valor";

const x = "declara un nombre de constante solo lectura y ambito bloque";

//MANEJO DEL VALOR UNDEFINED

// CUANDO SE TRABAJA CON VALORES BOOLEANOS SERA TRUE-FALSE
//CUANDO SE TRABAJA CON VALORES ENTEROS, SERA NAN SI ES UNDEFINED

//MANEJO DE NULL 

//SI SE MANEJA CON VALORES ENTEROS SE TOMA EL NULL COMO 0

//VARIABLE LOCAL: SOLO SE UTILIZA DENTRO DE LA FUNCION
//VARIABLE GLOBAL: SE PUEDE USAR EN TODO EL ARCHIVO

if (true) {
  var x = 5;
}
console.log(x); // x es 5

if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y no está definida

/*HOISTING EN JS, conocido como eleacion, hacen referencia
a variables que seran declaradas mas tarde y no arrojan
excepcion.sino UNDEFINED */

/**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor de undefined
var myVar = "my value";

(function () {
  console.log(myVar); // undefined
  var myVar = "valor local";
})();

//TIPOS DE DATO

/* 
    -BOOLEANO
    -NULL
    -UNDEFINED
    -NUMBER: entero o punto flotante
    -BIGINT: entero con precision arbitraria
    -STRING
    -SYMBOL: tipo de dato cuyas instancias son unicas/inmutables
*/

//CONVERSION DEL TIPO DE DATO

/*COMO JS ES DE TIPADO DINAMICO PUEDO ASIGNARLE 
UN ELEMENTO DEL CUAL NO ES EL TIPO LA VARIABLE Y 
NO OCURRIRA ERROR */

//NUMEROS Y OPERADOR +
x = "La respuesta es " + 42; // "La respuesta es 42"
y = 42 + " es la respuesta"; // "42 es la respuesta"
"37" - 7; // 30
"37" + 7; // "377"

 //CONVERSION DE TEXTO A DECIMAL

 //parseInt(valor,base en la que esta representada(escrito en decimal));
 //ESTE METODO DEVOLVERA EL VALOR DADO SEGUN LA BASE SELECCIONADA

 /*ARREGLOS LITERALES, SE INICIA CON VALORES ESPECIFICOS
 ESPACIOS QUE QUEDARAN CON UNDEFINED*/

 let coffees = ["French Roast", "Colombian", "Kona"];

 //PARA SALIDA POR PANTALLA

    console.log(salida);