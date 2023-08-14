 const { createStore } = require('redux'); 
 const reducer = require('./reducer') // Importo la info del archivo reducer.js

//Creamos la STORE y le pasamos  la funcion reducer.
 
const store = createStore(reducer) //Creo el store.


console.log(store.getState()) //opcional
//El metodo getState() nos permite acceder al valor del estado global









