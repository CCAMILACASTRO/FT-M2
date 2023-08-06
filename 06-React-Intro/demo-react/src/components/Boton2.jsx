import React from 'react';

class Boton2 extends React.Component{
    constructor(props){
        super(props)
    }
//Hay que llamar primero a render antes que el return para renderizar en pantalla.
    render(){
        return(
            <>
                <button>{this.props.texto}</button>
            </>
        )
    }
}

export default Boton2;