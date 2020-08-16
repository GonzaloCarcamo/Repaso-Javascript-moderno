// Métodos en arreglos

const personas = [

    { nombre: 'Gon', edad: 20, aprendiendo: 'Java' },
    { nombre: 'Juan', edad: 34, aprendiendo: 'PHP' },
    { nombre: 'Michelle', edad: 80, aprendiendo: 'JavaScript' },
    { nombre: 'Andrea', edad: 10, aprendiendo: 'Rust' },
    { nombre: 'Eduardo', edad: 15, aprendiendo: 'Python' },

]

console.log(personas);

// Mayores de 28 años

const mayores = personas.filter( persona => {
    return persona.edad > 28;
})

//console.log(mayores);

// Qué está aprendiendo Michelle 

const michelle = personas.find( persona => {
    return persona.nombre === 'Michelle';
})

// console.log(`Michelle está aprendiendo ${michelle.aprendiendo}`);

let total = personas.reduce( ( edadTotal, persona ) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);