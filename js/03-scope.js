// Scope

var musica = 'rock'

if( musica ) {
    var musica = 'grunge';
    console.log('Dentro del if: ', musica);
}

console.log('Fuera del if: ', musica);

// Scope con let

let musica2 = 'rock'

if( musica2 ) {
    let musica2 = 'grunge';
    console.log('Dentro del if: ', musica2);
}

console.log('Fuera del if: ', musica2);




/*

Notas:

- el scope es saber, en qué parte del programa una variable esta o no disponible.
- con var el scope siempre es el mismo. Con let y const no.

*/