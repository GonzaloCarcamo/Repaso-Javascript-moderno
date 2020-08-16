// Métodos o funciones en objetos

const persona = {
    nombre : 'Gonzalo',
    trabajo : 'Desarrollador web',
    edad : 32,
    musicaRock : true,
    mostrarInfo() {
        console.log(`${this.nombre} es ${this.trabajo}, y su edad es ${this.edad} años`)
    }
}

persona.mostrarInfo();

// this: es para acceder a los valores del mismo objeto