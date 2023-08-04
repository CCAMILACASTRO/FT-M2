const traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
//Todas las etiquetas tienen una propiedad 'children' y guardan todas las prop en un arreglo.
  for(let i = 0; i < startEl.children.length; i++){
    
    const element = startEl.children[i]; 
    let aux = traverseDomAndCollectElements(matchFunc, element)
    resultSet = [... resultSet, ...aux];
    //guardamos en el arreglo una copia de todo lo que hay en result y una copia de todo lo que hay en la variable aux
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

const selectorTypeMatcher = function (selector) {
  // tu código aquí

  if(selector[0]==="#") return "id"; //etiqueta con 'id'
  if(selector[0]===".") return "class"; //etiqueta con 'clase'
  if(selector.includes('.')) return "tag.class"; //etiqueta con nombre de la etiqueta y 'clase'
  return "tag";  //etiqueta con nombre de la etiqueta.
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector); //se guarda en una variable lo que retorna esa funcion
  let matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element){
      if('#' + element.id === selector){
        return true;
      }
      return false;
    }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let clases = element.classList //Nos guardamos todas las clases dentro de esa variable
      for(const clas of clases){ //iteramos las clases
        if('.' + clas === selector){ //comparamos si la clase tiene un punto antes y comparamos con el selector
          return true
        }

      }
      return false;
    }

  } else if (selectorType === "tag.class") { 
    matchFunction = function(element){  //<div class='myClass'></div>
      const tag = selector.split('.')[0] //en este guardamos solo el div
      const clase = selector.split('.')[1]  //en este guardamos 'myClass'
      
      const result = matchFunctionMaker(tag) //recursion
      result(element);

      const result2 = matchFunctionMaker(clase) //recursin
      result2(element);

      if(result && result2){ //si ambas dan true...
        return true
      } else {
        return false;
      }

    }

  } else if (selectorType === "tag") {
    matchFunction = function(element){
      if(element.tagName.toLowerCase() === selector){
        return true
      }
      return false;
    }
  }
  return matchFunction;
};

const $ = function (selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

