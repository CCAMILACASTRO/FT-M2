import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Form from './Components/Form/Form';
import Characters from './Components/Characters/Characters';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path= '/' element={<Landing/>} />
        <Route path='/login' element={<Form/>} />
        <Route path='/home' element={<Characters/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>

    </div>
  );
}

export default App;
