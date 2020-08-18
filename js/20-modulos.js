import { nombreTarea, crearTarea, tareaCompleta } from './19-poo-heredando-clases.js';

import Tarea from './21-exportar-clases.js';

console.log(nombreTarea);

/*
Cuando se utiliza export default no es necesario colocar las llaves, y la función puede nombrarse distinto
*/

const tarea1 = crearTarea('Pasear al perro', 'Media alta');

console.log(tarea1);

tareaCompleta();

const superTarea = new Tarea('Ser programador', 'Super Urgente');

console.log(superTarea);
