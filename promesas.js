let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => { //Promesa sintaxis resolve similar al callback y reject para manejar el error
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}



// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// Promesas en cadena

getEmpleado(1).then(empleado => { //Forma en cascadad para llamar a una promesa
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => { //captura el error del reject
    console.log(err);
});