//Modulo entry point.
import React from 'react';
import ReactDOM from 'react-dom/client';  // Virtual DOM
import './index.css';
import App from './App';

//Crea la raiz del DOM y va a buscar al HTML con el id root, porque empezamos a crear el DOM VIRTUAL a partir de ese elemento. 
//Agarra al root y le aplica el metodo render(mostrar) para que muestre en pantalla todo lo que haya en App
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <App />
);



