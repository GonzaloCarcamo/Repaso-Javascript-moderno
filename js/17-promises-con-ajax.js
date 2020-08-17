const descargarUsuarios = cantidad => new Promise( ( resolve, reject ) => {
    // Pasar cantidad a la API

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado AJAX
    const xhr = new XMLHttpRequest();

    // Abrir conexión
    xhr.open('GET', api, true);

    // onLoad

    xhr.onload = () => {
        if( xhr.status === 200 ) {
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional on error
    xhr.onerror = ( error ) => reject(error);

    // Send
    xhr.send()

});

descargarUsuarios(30)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.log(
            new Error('Hubo un error ' + error )
        )
    );

function imprimirHTML(usuarios) {

    let html = '';

    usuarios.forEach(usuario => {
       html += `
        <li>
            nombre: ${usuario.name.first} ${usuario.name.last}
            Pais: ${usuario.nat}
            imagen: 
                <img src="${usuario.picture.medium}">
        </li>
       `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}

