// Let y Const

var a = 1;
let b = 2;

if(true){
    var c = 3;
    let d = 4;
    
    console.log('a:', a, ', b:', b);
}

console.log('c:', c, ', d:', d);

const e = 5;
e = 6;
console.log('e:', e);

// Arrow Functions

this.nombre = "global";

let obj = {
  nombre: "objeto",
  fAnonima: function () {
    return this.nombre;
  },
  fFlecha: () => {
    return this.nombre;
  },
};

console.log(obj.fAnonima());
console.log(obj.fFlecha());

let bob = {
  name: "Bob",
  friends: ["Amy"],
  printFriends: function () {
    this.friends.forEach((f) => {
      console.log(this.name + " " + f);
    });
  },
};

bob.printFriends();

// Clases

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  toString() {
    return "Nombre: " + this.getNombre() + ", Apellido: " + this.getApellido();
  }
}

// extends => 'Hereda de...'
class HenryGrad extends Persona {
  constructor(nombre, apellido, fechaGrad) {
    super(nombre, apellido); // new Persona(nombre, apellido);
    this.fechaGrad = fechaGrad;
  }
  getFechaGrad() {
    return this.fechaGrad;
  }
}

let grad = new HenryGrad("Erik", "Pajares", 2023);

console.log(
  "Nombre: ",
  grad.getNombre(),
  ", Apellido: ",
  grad.getApellido(),
  ", Fecha Grad: ",
  grad.getFechaGrad()
);

// Object literals

let nombre = 'Cande'

let obj = {
    // Extender de un prototipo/clase -> PERSONA
    __proto__: [Persona.prototype, HenryGrad.prototype],

    // Atajo de propiedades como esta 'prop: prop'
    nombre,

    apellido: 'Yarossi',

    // Métodos
    toString(){
        // Llamadas a super()
        return 'OBJ: ' + super.toString();
    },

    // Calculo de nombre propiedades de forma dinámica
    //['prop_' + f9()] : 9,
    ['prop_' + (() => 19)()]: 9,
}

function f9(){
    return 9;
}

console.log(obj.toString())
console.log(obj)

// Template Literals

console.log('Salto de \n línea');

console.log(`Salto de
línea`);

let name = "Diego",
  lastname = "Denegri";
console.log(`Nombre: ${name}, Apellido: ${lastname}`);

// Destructuring

let persona = {
  id: 0,
  nombres: { primer: "Javier", segundo: "Mauricio" },
  apellido: "Rodriguez",
};

function saludar({ nombres: { primer }, apellido }) {
  return `Hola ${primer} ${apellido}`;
}

function saludar2(persona) {
  let {
    nombres: { primer },
    apellido,
  } = persona;
  return `Hola ${primer} ${apellido}`;
}

console.log(saludar2(persona));

// Default

let arr = [1, 2, 3];

function mostrarNumeros(a, b, c, d = 4) {
  return a + " " + b + " " + c + " " + d;
}
console.log(mostrarNumeros(arr[0], arr[1], arr[2]));

// Rest

function mostrarNumeros(a, b, c) {
  return a + " " + b + " " + c;
}
console.log(mostrarNumeros(...arr)); // arr[0], arr[1], arr[2]

// Spread

function mostrarNumeros(a, ...b) { // a = arr[0], b = [arr[1], arr[2]]
  return a + " " + b[0] + " " + b[1];
}
console.log(mostrarNumeros(arr[0], arr[1], arr[2]));

// Promises

let value = true;

let promesa = new Promise(function (resolve, reject) {
  value ? resolve("exito") : reject(new Error("error"));
});

promesa.then((data) => console.log(data)).catch((err) => console.log(err));
