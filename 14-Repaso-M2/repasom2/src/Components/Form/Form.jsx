import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] =  useState({
        email:'',
        password: '',
    })

    const handleChange = (event) => { //Con esta funcion mi estado queda atento a lo que el usuario escriba en el input
        setForm({
            ...form,  // Me guardo una copia del estado
            [event.target.name]: event.target.value // Se guarda el valor del input en la propiedad de mi estado de acuerdo al name.
        })
        setErrors(validate())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/home');
    }
    
    //   /\S+@\S+\.\S+/

    const validate = () => {

        const error = {}

        if( !/\S+@\S+\.\S+/.test(form.email)){
            error.email = 'Email inválido';            
        }
        if(form.password.length < 6){
            error.password = 'La contraseña debe tener minimo 6 caracteres.'
        }
        return error;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' value={form.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <hr/>

            <label htmlFor="password">Password: </label>
            <input type="password" name='password' value={form.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}

            <hr/>

            <button>LOGIN</button>

        </form>
    )
}

export default Form;