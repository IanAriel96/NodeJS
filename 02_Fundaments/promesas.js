const empleados = [
    {
        id: 1,
        nombre: 'Ian'
    },
    {
        id: 2,
        nombre: 'Luis'
    },
    {
        id: 3,
        nombre: 'Fernando'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

/////////// CASO 1 Forma mas simple de entender la creacion de la promise //////////////////////
// const getEmpleado = (id) => {

//     const promesa = new Promise((resolve, reject) => {
//         const empleado = empleados.find(e => e.id === id)?.nombre;
//         if (empleado) {
//             resolve(empleado);
//         } else {
//             reject(`No existe empleado con id ${id}`)
//         }
//     })
//     return promesa;
// };


// getEmpleado(1)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


////// CASO 2 hacer la misma promesa de manera mas simplificada y usando un operador ternario osea "?" y ":" a la vez////////

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    })
};

const getSalario = (id) =>{

    return new Promise ((resolve,reject)=>{
        const salario = salarios.find(e=>e.id===id)?.salario;
        (salario)
        ? resolve(salario)
        : reject(`Existio un error no existe el salario con id ${id}`);
    })
}
const id = 10

//////////// CASO A forma desglozada y separada de la llamada a la promise /////////////
// getEmpleado(1)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(1)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

////////////////CASO B Forma mas simplificada ////////////////////////////////
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then (salario => console.log('El empleado:', nombre,'tiene un salario de:', salario))
    .catch(err => console.log(err));

