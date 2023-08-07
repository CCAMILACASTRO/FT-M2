import React from "react";
import Botones from './Botones';

const studentName = "Camila";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Practicando con React</h1>
      <h3>{studentName}</h3>
      {/* La ul va por fuera del codigo para que pueda ser renderizada */}
      <ul> 
      {
        techSkills.map(skills =>{
          return(
              <li>{skills}</li>
          )
        })
      }
      </ul>
      <Botones alerts= {alerts}/>
    </div>

  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
