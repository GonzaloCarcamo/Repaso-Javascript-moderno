// Prototypes

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregar prototype a tarea

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea es ${this.nombre}, y su prioridad es ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender React', 'urgente');

console.log(tarea1);

console.log(tarea1.mostrarInformacionTarea() );

// Permite atar funciones a objetos