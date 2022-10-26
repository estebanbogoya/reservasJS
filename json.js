/* STORAGE! */
// Nos permite guardar datos de manera local en el navegador. 
// El navegador nos oferce dos formas de guardar datos. 

// 1) Local Storage: almacena los datos de forma indefinida, hasta que el usuario los borre de forma manual. 

// 2) Session Storage: almacena los datos hasta que el usuario cierre el navegador.

/* 1. LOCAL STORAGE */

// Para guardar datos en el LocalStorage, vamos a utilizar un metodo que se llama setitem(): 

// Ejemplo A: almacenar un saludo: 

//Recibe dos parametros: El nombre de la clave, y otro el valor a almacenar. 

localStorage.setItem("saludo", "Hola mundo!");

// Ejemplo B: almacenamos un number: 

localStorage.setItem("numero", 100);

// Ejemplo C: pasamos un boolean:

localStorage.setItem("boolean", true);

// Recuperar los valores almacenados. Para esto utilizamos el metodo getitem() y pasamos por parametro la clave del valor que queremos recuperar. 

let saludo = localStorage.getItem("saludo")
console.log(saludo);

// Ejemplo recuperar un numero: 

let numero = localStorage.getItem("numero")
console.log(numero);

// Trabajamos con el SessionStorage. 
// Tiene funcionamiento similar al LocalStorage. 

sessionStorage.setItem("SaludoNuevo", "Hola Mundoooo x2!")

//Usamos getitem() para recuperar.

let saludoNuevo = sessionStorage.getItem("SaludoNuevo")
console.log(saludoNuevo);

// Recorrer con un Bucle: 
// OJO! No se puede utilizar for..of porque no es un objeto iterable! 

// Lo podemos recorrer asi: 

// Utilizamos el metodo key() que nos devuelveun array con las claves del storage. 

console.log("Recorremos el LocalStorage: ");

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}

// Eliminar datos del storage: 
// Para eliminarlos utilizamos el metodo removeItem();

//localStorage.removeItem("saludo");

//Tambien puedo eliminar toda la informacion con el metodo clear();

//localStorage.clear();

/************* ALMACENAMOS OBJETOS EN EL STORAGE ************/

// Tenemos que tener en cuenta que todo lo que se almancena en el storage, esta en formato String. 

// Por lo tanto, si queremos almacenar un Objeto, tenemos que convertirlo a String. 

// JSON: JavaScript Object Notation. Es un formato de texto ligero para intercambio de datos.
// JSON ES UN STRING CON UN FORMATO ESPECIAL. 

// Convertir un objeto a JSON!: 

// Utilizar metodo JSON.stringify();

const esteban = {
    nombre: "Esteban",
    apellido: "Bogoya",
    edad: 25,
    casado: false
}

const estebanJSON = JSON.stringify(esteban);

console.log(estebanJSON, typeof estebanJSON);

// Almacenar en el LocalStorage

localStorage.setItem("esteban", estebanJSON)

// Si quiero recuperar un JSON del localStorage y convertirlo en un objeto, tengo que utilizar el metodo JSON.parse()

const personaJSON = localStorage.getItem("esteban");
const persona = JSON.parse(personaJSON);

console.log(persona, typeof persona);
