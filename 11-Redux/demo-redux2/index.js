 
 const { createStore } = require('redux'); 

// 3) Creamos el estado global(global state) que es siempre un objeto

 const initialState = {
    count: 0,
    instructor: '',
    cohorte: '',
    alumnos: [],
 }


// 2) Creamos la funcion REDUCER con el state y el action por parametros.
// Dentro del reducer hacemos los condicionales para modificar el state.
 const reducer = (state=  initialState , action) => {

    if(action.type === 'AUMENTAR_COUNT') { //De esta forma pisamos al estado actual y actualizamos los datos.
        return { 
            ... state,  //(copia)
            count: state.count + 1}  // (actualizamos count)
    }

    if(action.type === 'CAMBIAR_INSTRUCTOR'){
        return {
            ... state, //retorno siempre un objeto con la copia del stado actual.
            instructor: action.payload,
        }
    }

    if(action.type === 'MODIFICAR_ALUMNOS' ){
        return {
            ...state,
            alumnos: action.payload,
        }
    } 

    if(action.type === 'SUMAR_ALUMNOS'){
        return{
            ...state,
            alumnos: [...state.alumnos, ...action.payload], //Crea la copia de ambos arrays dentro de uno solo.
        }
    }
 }


// 1) Creamos la STORE y le pasamos  la funcion reducer.
 const store = createStore(reducer) //Creo el store.


 // 4) La ACTION sale el metodo DISPATCH del store.
 // Las ACTIONS son un objeto con prop obligatoria 'type' + otras como 'payload'.

 store.dispatch( { type: 'AUMENTAR_COUNT' } ) 

 store.dispatch( { type:'CAMBIAR_INSTRUCTOR', payload: 'Dai' } )

 store.dispatch( { type: 'MODIFICAR_ALUMNOS', payload: ['Cami', 'Mai', 'Javi']})

 store.dispatch( { type: 'SUMAR_ALUMNOS', payload: ['Silvi', 'Beto']})



 console.log(store.getState()) 
 // 5) El metodo getState() nos permite acceder al valor del estado global









