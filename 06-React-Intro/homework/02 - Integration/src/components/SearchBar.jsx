export default function SearchBar(props) { 
   //Tmb puede ir OnSearch por parametro en vez de prop
   return (
   /* Podemos colocar simplemente el nombre de la funcion dentro del onClick {onSearch} */
      <div>
         <input type='search' />
         <button onClick={(characterID) => alert(characterID)}>Agregar</button>
      </div>
   );
}
