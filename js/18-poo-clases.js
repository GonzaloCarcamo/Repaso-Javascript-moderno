// Escribir clases

class Tarea {
    constructor( nombre, prioridad) {

        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar( ) {
        return `${ this.nombre } tiene una prioridad de ${ this.prioridad }`;
    }
}

// Crear los objetos

let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Pasear a Abbey', 'Media');
let tarea3 = new Tarea('Cortarme el pelo', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3.mostrar());


/*
    Constructor: Sirve para pasar los argumentos hacia el objeto. Es lo que se ejecuta primero, una vez que se
    crea una instancia para una tarea.
    Se dice que un método es una función dentro de una clase
*/