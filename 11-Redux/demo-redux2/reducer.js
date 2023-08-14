const { AUMENTAR_COUNT , CAMBIAR_INSTRUCTOR, MODIFICAR_ALUMNOS, SUMAR_ALUMNOS } = require ('./action-type')

// Creamos el estado global(global state) que es siempre un objeto

const initialState = {
    count: 0,
    instructor: '',
    cohorte: '',
    alumnos: [],
 }

// Creamos la funcion REDUCER con el state y el action por parametros.
// Dentro del reducer hacemos los condicionales para modificar el state.
 const reducer = (state=  initialState , action) => {

    switch(action.type){

        case AUMENTAR_COUNT:
            return { 
                ... state,  //(copia)
                count: state.count + 1,
            } 
        case CAMBIAR_INSTRUCTOR:
            return {
                ... state, //retorno siempre un objeto con la copia del stado actual.
                instructor: action.payload,
            }
        case MODIFICAR_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload,
            }
        case SUMAR_ALUMNOS:
            return{
                ...state,
                alumnos: [...state.alumnos, ...action.payload], //Crea la copia de ambos arrays dentro de uno solo.
        }

        default: 
            return { ...state };
    }  
 }

 module.exports = reducer;