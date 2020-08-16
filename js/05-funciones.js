// Creando una función




// Function declaration

function saludar( nombre ) {
    console.log('Hola, yo soy ' + nombre)
}

saludar('Gonzalo');


// Function expression

const cliente = function (nombreCliente) {
    console.log('Mostrando los datos del cliente: ' + nombreCliente)
}

cliente('Juan');


/* 

Notas:

- Las funciones se pueden reutilizar
- Con function declaration se puede llamar antes la función (primero JS lee todo el documento).
- En function expression se debe declarar antes, esta es la principal diferencia.

*/


// Parámetros por default en funciones

function actividad( nombre = 'Walter White', actividad = 'Enseñar química' ) {
    console.log( `La persona de nombre: ${nombre}, tiene la actividad de ${actividad} ` )
}

actividad('Gonzalo', 'Aprender JavaScript');

actividad('Pedro', 'Aprender PHP');

actividad('Gonzalo');

const actividad1 = function ( nombre = 'Walter White', actividad = 'Enseñar química' ) {
    console.log( `La persona de nombre: ${nombre}, tiene la actividad de ${actividad} ` )
}

actividad1('Pedro', 'Aprender PHP');

actividad1('Gonzalo');



