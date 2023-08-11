import { useState } from "react";


const Forms = () => {

    const [form, setForm] = useState({//Creo el estado
        email: '',
        password: '',
    }); 

    const handleOnChange = (event) => { //Creo la funcion que me permite quedarme con el valor de los inputs
        console.log(event.target.name)
        setForm({
            ...form,      // Asi hacemos una copia completa de lo que hay en el estado porque si modifico alguno de los dos, no pierdo la info del otro
            [event.target.name]: event.target.value  //Con los [] accedo a la propiedad del evento y le guardo el valor que pone el usuario en el input 
        })
        validate();
    }

    const [errors, setErrors] = useState({
        email:'',
        password:'',
    })

//Validacion de email corta:  !/\S+@\S+\.\S+/
// Validacion de email larga:  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

    const validate = () => {//Validaciones con REG EXP / EXPRESIONES REGULARES
        if(!/\S+@\S+\.\S+/.test(form.email)){  
            setErrors({
                ...errors,
                email:'Email inválido'
            })
        }
        else errors.email = '';
    }

    const handleOnSubmit = (event) => { //De esta manera manejamos el evento delboton para que no se recargue la pagina cuando hace click
        event.preventDefault()
    }


    return(
        <form onSubmit={handleOnSubmit}>
            <h1>Formulario</h1>

            <label htmlFor="email">Email: </label>
            <input name='email' type="email" placeholder="ingrese su email" value={form.email} onChange={handleOnChange} />
            {errors.email && <p>{errors.email}</p>}
            
            <br/><br/>
            
            <label htmlFor="password">Password: </label>
            <input name='password' type="text" placeholder="ingrese su password" value={form.password} onChange={handleOnChange} />
            
            <br/><br/>
            
            <button disabled={!form.email || !form.password || errors.email || errors.password} >ENVIAR</button>
        </form>
//Si el usuario no completo el campo de email o password o hay errores en su email o password, el boton queda deshabilitado.
    );
}

export default Forms