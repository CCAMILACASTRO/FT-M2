
//http://localhost:5000/amigos --> nos da un array de objetos con los datos de amigos

//Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la ruta http://localhost:5000/amigos

const boton = document.querySelector('#boton'); //traemos el boton donde queremos hacer la peticion
const url = 'http://localhost:5000/amigos' //guardamos en una constante la url/ruta/servidor donde obtenemos los datos.

const listaAmigos = (response) => {
    
    const listaUl = document.querySelector('#lista'); //traemos la ul para ir creando dentro de ella las li
    listaUl.innerText = '';

    response.forEach((amigo) =>{ //iteramos cada elemento del array 'response' que recibimos del servidor
        const newli = document.createElement('li'); //creamos la li
        newli.innerText = amigo.name;  // le asignamos a cada li el nombre de los amigos
        listaUl.appendChild(newli);  // le agregamos la li como hijo de la ul que trajimos
    })
}

const agregarAmigos = () =>{ //creamos una funcion para agregarle al boton

    $('#lista').empty()//agarro el elemento directamente y lo dejo vacio antes de apretar el boton y hacer la peticion

    $.get(url, listaAmigos);
}


boton.addEventListener('click', agregarAmigos); //generamos el evento del boton con la funcoin del get

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de un amigo en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar, Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1

const botonSearch = document.querySelector('#search')

//creamos la funcion que nos trae el elemento al cual le vamos a agregar el nombre
const obtenerAmigo = (response) => { // el response es un objeto
    
    const span = document.querySelector('#amigo'); //tomamos el elemento span para agregar el nombre del amigo
    span.innerText = response.name; //le asignamos a cada span el nombre del amigo
}

//creamos la funcion que imprime el nombre del amigo y que se ejecuta cuando presiona el boton
const buscarAmigo = () =>{

    const input = document.querySelector('#input') //Tomamos el elemento input
    const id = input.value //le asignamos a la variable id, el valor que coloque el usuario en el input.
    input.value = ''; // luego de apetar el boton se impua el imput y queda vacio

    $.get(`${url}/${id}`, obtenerAmigo ) //usamos las template string para concatenar la url con el id que tiene el numero del input
}

// generamos el evento del boton
botonSearch.addEventListener('click', buscarAmigo )

/*--------------------------------------------------------------------------------------------------------------------------------------*/

//Un input que reciba el id de un amigo y un boton "borrar". Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar. Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2

const eliminarAmigo = () =>{

    const inputDelete = document.querySelector('#inputDelete'); //Tomamos el elemento input
    const id = inputDelete.value; //le asignamos a la variable id, el valor que coloque el usuario en el input. 
    inputDelete.value = ''; //Cuando apretamos el boton se borra el imput.
    
    const mensaje = document.querySelector('#success')
    mensaje.innerText = 'Tu amigo ha sido borrado con exito'; //cuando apretamos el boton se imprime este mensaje.

    $.ajax({
        type: 'DELETE',
        url: `${url}/${id}`, //le pasamos la url concatenada con la / y el numero del id que recibe por el input.
        success: (response) => listaAmigos(response),
 //invocamos a la funcion de listaAmigos y a la listaUl la hacemos vaciar para que cuando apretamos en el boton, se borre el nombre de la lista
    })
}

const botonDelete = document.querySelector('#delete')

botonDelete.addEventListener('click', eliminarAmigo)
