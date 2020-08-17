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

class ComprasPendientes extends Tarea {
    constructor( nombre, prioridad, cantidad ) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
}

// Compras 

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 2);

console.log(compra1.mostrar());

// Se pueden heredar los métodos y el constructor
// El super también puede ser usado en el método, pero solo puede haber un return