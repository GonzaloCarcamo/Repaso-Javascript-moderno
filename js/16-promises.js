// Promises

const aplicarDescuento = new Promise( ( resolve, reject) => {
    setTimeout( () => {
        let descuento = true;

        if( descuento ) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar descuento');
        }
    }, 3000 )
});


/*

Cuando se realizan llamados asíncronos (a una API por ejemplo), con los promises podemos manejar ambos
escenarios (que funcione o falle).

resolve: se ejecuta cuando el llamado es exitoso

reject: se ejecuta cuando hay un error

*/

aplicarDescuento.then( resultado => {
    console.log(resultado);
}).catch( error => {
    console.log( error );
})

