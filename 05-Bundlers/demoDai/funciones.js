
//FUNCIONES

//Como hacemos para recibir datos de otro archivo??

//OPCION 3: que usa REACT y gracias a ECMAS6:

// import{numero1, numero2, name} from './constantes'

export const sumar1 = (a, b) => {
    console.log (a + b);
}

export const printName1 = (nombre) => {
    console.log(nombre)
}
// sumar1(numero1, numero2);
// printName1(name);




//OPCION 1
const constantes = require('./constantes')
console.log(constantes)

const sumar = (a, b) => a + b;

const printName = (name) => {
    console.log(name)
}

//como usamos la info? usamos el objeto creado constantes. 
console.log(sumar(constantes.num1, constantes.num2));
printName(constantes.nombre);

//OPCION 2:
// Usamos destructuring:

const {num1, num2, nombre} = require('./constantes')






 