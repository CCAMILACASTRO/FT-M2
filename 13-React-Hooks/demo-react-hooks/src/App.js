import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';
import Characters from './components/Characters'


function App() {

  const [show, setShow] = useState({
    contador: true,
    characters: true,
  });

  const toggle = (event) => { //Cambia de true a false cada vez que haga click.
    setShow({
      ...show,
      [event.target.name]: !show[event.target.name]
    }) 
  }
  //Cuando hace click si el show esta en true, muestra el componente.

  return (
    <div className="App">
      <button onClick={toggle} name='contador'>{ show.contador ? 'HIDE' : 'SHOW'}</button>
      { show.contador && <Contador/>} 

      <button onClick={toggle}name='characters'>{ show.characters ? 'HIDE' : 'SHOW'}</button>
      { show.characters && <Characters/>} 

    </div>
  );
}

export default App;
