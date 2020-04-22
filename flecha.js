//forma habitual
/*
function sumar(a, b) {
    return a + b;
}
*/
let sumar = (a, b) => a + b; // Forma de la funcion flecha cuando tiene una sola instrucción omite las {}

console.log(`la suma de 3+4= ${sumar(3,4)}`); //se llama a la funcion flecha de la forma habitual 

let hola = (nombreRecibo) => (`Hola chicos ${nombreRecibo}`);
console.log(`${hola("Alexander")}`);

let saludo = () => { //funcion flecha
    let a = "Alexander";
    let b = "Chicos";
    return `${a} ${b}`;
}
console.log(`${saludo()}`);

let deadpool = {
    nombre: `Wade`,
    apellido: `Wilson`,
    poder: `Regeneración`,
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} ${deadpool.poder}`
}
console.log(deadpool.getNombre());