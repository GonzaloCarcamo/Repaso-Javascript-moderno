// Destructuring de objetos

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    
    frameworks: ['Vue', 'React', 'Angular']
}

// Es extraer valores de un objeto versión ANTIGUA

// let framework = aprendiendoJS.frameworks[2];

// console.log(framework);

// Es extraer valores de un objeto versión NUEVA

let { nueva } = aprendiendoJS.version;

console.log(nueva);

