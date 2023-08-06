// https://jsonplaceholder.typicode.com/users

const responseHandler = (response) => {

    //usamos DESTRUCTURING para traer el elemento donde se encuentran los 'li' 
        //const [usersList] = $('#usersList') //si buscamos por id la respuesta es unica porque los 'id' son unicos
        const ul = document.querySelector('#usersList') //o con querySelector('#usersList')
       
        //iteramos el array de usuarios....
        response.forEach(user => {  
            const newLi = document.createElement('li') //creamos la 'li' donde vamos a guardar los usuarios
            newLi.innerText = user.name //Agregamos a la etiqueta 'li', los nombres dentro de la prop 'name' de user(objeto)
            ul.appendChild(newLi) // le creamos un hijo a la etiqueta ul.
        })
}

//Seleccionamos el elemento del boton:
//const [boton] = $('#cargarUsuarios') DESTRUCTURIN;
const boton = document.querySelector('#cargarUsuarios');

//creamos una funcion que ejecute nuestra peticion:
const peticionUsuario = ()=>{
    $.get('https://jsonplaceholder.typicode.com/users', responseHandler);
}

//Creamos un evento de click y le asignamos la peticion que creamos como callback.
boton.addEventListener('click', peticionUsuario)
    



