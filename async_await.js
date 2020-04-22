// let getNombre = async() => {
//     throw new Error("No existe el usuario en BD");
//     return "Alexander";
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Alexander");
        }, 3000);
        // reject("Error al consultar el nombre");
    });
}

let saludo = async() => {
    let nombre = await getNombre(); //hace que espere lo que va a retornar la promesa getNombre
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("Error en el Saludo:", err);
});

// console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error en el ASYNC:", err);
// });