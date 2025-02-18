
// Info: La problematica aqui es que al hacer callbacks debemos definir cuando exista un error por eso se usa la variable llamada esta vez err 
// para cubrir los condicionales que tengan un error y tener codigo mas limpio


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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        callback(null, empleado.nombre) // el primer argumento de return significa que no existe ningun error, el segundo arg es el valor
    } else {
        callback(`Error no existe el empleado con id ${id}`)
    }
}

const getSalario = (id, callback)=>{
    const salario = salarios.find(e=>e.id===id)?.salario // el ? es un check operator significa que si lo que se recibe de la function no es undefined o null entonces continua con lo que sigue en este caso dame el argumento del objeto que encontraste con la funcion find()
    if(salario){
        callback(null,salario); 
    }else{
        callback(`Error no existe el salario con el id:${id}`)
    }
}
///////////////////CASO 1 LLamado de las funciones individualmente//////////////////////
// getEmpleado(1, (err, empleado) => {
//     if(err){
//         console.log("Error!");
//         return console.log(err);
//     }
//     console.log(empleado.nombre);   // Ojo ver aqui que se usa el .nombre para llamar al argumento
// });

// getSalario(id=2,(err, salario)=>{
//     if(err){
//         console.log("Error!");
//         return console.log(err);
//     }
//     console.log(salario);           // ojo aqui no se usa el .salario para llamar al argumento del obj ya que se uso "?" que es un check operator 
// })

////////////////CASO 2 uso de las funciones en conjunto o a la misma vez ////////////////////
//// Problematica como no existe un salario con id:3 pero si un empleado con ese id en que punto o funcion se dio el error ??/////////////////////////////////
//// La solucion son las Promesas que se encuentra en el siguiente archivo/////////////
getEmpleado(3, (err, empleado) => {
    if(err){
        console.log("Error!");
        return console.log(err);
    }
    getSalario(id=2,(err, salario)=>{
        if(err){
            console.log("Error!");
            return console.log(err);
        }
        console.log(`el usuario`, empleado,`tiene un salario de:`,salario);           // ojo aqui no se usa el .salario para llamar al argumento del obj ya que se uso "?" que es un check operator 
    })
});




