const Alumnos = ({alumnos, cohorte}) => { //Puedo pasarle 'props' o las propiedades que queramos de ese objeto como destructuring.
//                      (props)
    //const {alumnos, cohorte} = props; //Destructuring

    console.log(alumnos);
    console.log(cohorte);

    return (
        <>
            <h3>Alumno s: {cohorte}</h3>
            {
            //Recorre el array y por cada alumno crea una etiqueta p con el nombre y una etiqueta span con la edad
                alumnos.map(alumno => { 
                    return (
                        <div>
                            <p>{alumno.name}</p>
                            <span>{alumno.age}</span>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Alumnos;