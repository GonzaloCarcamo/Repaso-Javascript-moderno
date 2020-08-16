// Templates Strings

const nombre = 'Juan';
const trabajo = 'Desarrollador WEB';

// Concatenación

console.log('Nombre: ' + nombre + ', trabajo: ' + trabajo);


// Concatenar con template strings

const contenedorApp = document.querySelector('#app');
let html = 
`
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>      

    </ul>

`;

contenedorApp.innerHTML = html;