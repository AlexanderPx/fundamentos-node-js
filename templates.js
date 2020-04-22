let nombre = "Deadpool";
let real = "Wade Wilson"
console.log(nombre + " " + real); //Concatenar String forma tradicional
console.log(`${nombre} ${real}`); //Concatenar String forma template
let nombreCompleto = nombre + " " + real; //Concatenar String forma tradicional
let nombreTemplate = `${nombre} ${real}`; //Concatenar String forma template
console.log(nombreCompleto === nombreTemplate); //3= para compara que el contenido de las 2 variables se igual en contenido 

function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es: ${getNombre()}`);