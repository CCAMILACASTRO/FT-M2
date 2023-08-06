
// CONSTANTES

const num1 = 5;
const num2 = 3;
const nombre = 'Cami';
const cohorte = ()=> {
    return 'hoooliiiis!!';
}

//como hacemos para dejar disponible esta informacion??
// 3 FORMAS:

//3: forma que utiliza REACT y traigo por ECMAS6:

export const numero1 = 5;
export const numero2 = 3;
export const name = 'Cami';

//por defecto exporta...
//export default cohorte = 'FT 41b'


//1: exports --> es un objeto que acepta propiedades:valores.

exports.num1 = num1
exports.num2 = num2
exports.nombre = nombre 


//2: module.exports

module.exports = {
    num1, //num1: num1, objetos literales (ECMAS6) 
    num2,  //num2: num2,
    nombre, //nombre : nombre 
}
