
/*Creamos una constante para cada action.type que luego le pasamos al al type de cada funcion action del archivo actions.js
De esta manera evitamos errores de tipeos.*/

const AUMENTAR_COUNT = 'AUMENTAR_COUNT';

const CAMBIAR_INSTRUCTOR = 'CAMBIAR_INSTRUCTOR';

const MODIFICAR_ALUMNOS = 'MODIFICAR_ALUMNOS';

const SUMAR_ALUMNOS = 'SUMAR_ALUMNOS';

module.exports = { AUMENTAR_COUNT , CAMBIAR_INSTRUCTOR, MODIFICAR_ALUMNOS, SUMAR_ALUMNOS };