//import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Alumnos from './components/Alumnos';
import Boton from './components/Boton';
import Boton2 from './components/Boton2';

function App() {

  const alumnos = [
    {name: 'Javi', age: 28 },
    {name: 'Silvia', age: 57 },
    {name: 'Lulu', age: 81 },
    {name: 'Mailen', age: 29 },
    {name: 'Matias', age:30 },
    {name: 'Bato', age: 57},
  ]

  return (   // En este return colocamos los componentes que queremos renderizar.
    <div>
      <Title/> 
      <Alumnos alumnos ={alumnos} cohorte='FT41b' totalAlumnos='400' />
      <Boton texto='Esto es un boton'/>
      <Boton2 texto='Boton con clase'/>
    </div>
  );
}

export default App;
 