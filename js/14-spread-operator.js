// spread operator ... (nos permite combinar dos arreglos distintos)

function suma(a,b,c) {
    console.log(a+b+c);
}

const numeros = [ 1,2,3,];

suma(...numeros);

