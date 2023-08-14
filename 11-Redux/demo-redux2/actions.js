
const { AUMENTAR_COUNT , CAMBIAR_INSTRUCTOR, MODIFICAR_ALUMNOS, SUMAR_ALUMNOS } = require ('./action-type')

/* Cuando es modularizado le sacamos el store.dispatch() y cada action es una funcion que retorna el objeto
 La ACTION sale el metodo DISPATCH del store.
 Las ACTIONS son un objeto con prop obligatoria 'type' y su valor son el nombre de las variables creadas en action-type.js */

 
 const aumentarCount = () => { 
    return {type: AUMENTAR_COUNT };
 }

 const cambiarInstructor = () => {
    return { type:CAMBIAR_INSTRUCTOR, payload: 'Dai' } ;
 } 

 const modificarAlumnos = () => {
    return { type: MODIFICAR_ALUMNOS, payload: ['Cami', 'Mai', 'Javi']};
 } 

 const sumarAlumnos = () => {
    return { type: SUMAR_ALUMNOS, payload: ['Silvi', 'Beto']};
 } 

 module.exports = {aumentarCount, cambiarInstructor, modificarAlumnos, sumarAlumnos }