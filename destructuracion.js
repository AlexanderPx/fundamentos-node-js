let deadpool = { //objeto normal
    nombre: `Wade`,
    apellido: `Wilson`,
    poder: `Regeneración`,
    getNombre: function() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//Opcion 1:
console.log(deadpool.getNombre());
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;
//Opcion 2: destructuracion
let { nombre: primernombre, apellido, poder } = deadpool; //con destructuracion cambia la forma de llamar al objeto y permite renombrar los atributos
console.log(primernombre, apellido, poder);