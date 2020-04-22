/*setTimeout(() => {
    console.log("hola muchachos");
}, 3000)*/

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Alexander",
        id
    }
    if (id === 20) {
        callback(`El usuario con id : ${id} no existe!`); //mensaje de error del callback
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) => { //forma de callback el estandar dice que el error va como primer argumento en el callback
    if (err) {
        return console.log(err);

    }
    console.log("Usuario de la base de datos", usuario);
});