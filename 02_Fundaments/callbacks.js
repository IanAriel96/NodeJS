const getUserById = (id, callback) =>{

    const user = {
        id,
        name: 'Ian'
    }

    setTimeout(()=>{
        callback(user)  // el user como argumento es el return de la funcion callback
    }, 1500)

}

getUserById(10,(usuario)=>{ // el arg usuario es el argumento que se recibe despues de la ejecucion de la funcion callback y dentro de esta la operacion que desee realizar con el argumento recibido
    console.log(usuario.id);
    console.log(usuario.name.toUpperCase());
})