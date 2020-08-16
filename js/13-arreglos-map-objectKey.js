// arreglos y .map

const carrito = ['producto1', 'producto2', 'producto3'];

let map = carrito.map( producto => {
    
    return 'El producto es ' + producto;

})

console.log(map);

// Object key

const persona = {
    nombre: 'Juan',
    trabajo: 'Dev',
    edad: 32
}

console.log(Object.keys(persona));

