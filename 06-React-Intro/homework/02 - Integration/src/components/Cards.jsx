import Card from './Card';

export default function Cards({characters}) { //Destructuring tomando el array
   return (
      <div>
         {  //Paso por destructuring las propiedades que quiero que incluyan las cards.
            characters.map(({id, name, status, species, gender, origin, image}) => {
               return (
//Por cada personaje retorno una Card(componente) como plantilla que tiene y sus propiedades con su id unico.                 
                  <Card 
                  key= {id} //Esta key la necesita React para diferenciar cada componente.
                  id= {id}
                  name= {name}
                  status= {status}
                  species= {species}
                  gender= {gender}
                  origin= {origin.name} //Porque esta prop es un objeto y para acceder a sus datos necesito ingresar a él.
                  image= {image}
                  onClose= {() => alert('Emulamos que se cierra la card')}
                 /*Agregamos el metodo manualmente porque solo estaba funcionando en la Card de plantilla
                 y de esta manera todas las Cards ahora heredan esa funcion*/ 
                  />  
               )
            })
         }
      </div>
   );
}
