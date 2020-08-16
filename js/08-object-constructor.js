// Object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear nueva tarea

const tarea1 = new Tarea('Aprender React', 'urgente');

const tarea2 = new Tarea('Sacar al perro', 'media');

const tarea3 = new Tarea('Comprar pan', 'media');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

// La ventaja es poder crear varios objetos