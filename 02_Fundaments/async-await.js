//// Para entender este file ver primero archivo de promesas.js ///////
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

const getInfoUsuario = async (id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es ${salario}`;
    }catch (error){
        //return error;   // si mandamos el error asi entonces se envia como mensaje o error satisfactorio y no como alerta de un error
        // esto perjudica al momento de llamar al promise porque siempre sera respuesta del .then y no del .catch
        throw error;    // de esta manera aseguramos que el error sea visto como error y no como msg exitoso
    }
 }

const id = 2;

getInfoUsuario(id)
    .then(msg => {
        console.log("Todo salio bien");
        console.log(msg)
    })
    .catch(error => {
        console.log("Todo salio Mal !!");
        console.log(error)
    })

