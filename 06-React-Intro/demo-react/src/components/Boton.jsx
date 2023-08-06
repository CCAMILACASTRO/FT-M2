const Boton = (props) => {

    return(
        // Para acceder a la propiedad del objeto porops --> props.texto     
        <>
            <button>{props.texto}</button>  
        </>

    )
}

export default Boton;