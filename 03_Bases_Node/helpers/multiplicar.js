const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta=10) => {
    try {
        let salida = '';
        for (let x = 1; x <= hasta; x++) {
            //console.log(`5 x ${x} = ${5*x}`);
            salida += `${base} x ${x} = ${base * x}\n`;
        }
        if(listar){
            console.log('========================'.green);
            console.log('   Tabla del:'.green, base);
            console.log('========================'.green);
            console.log(salida);
        }
        // fs.writeFile(`FileTabladel-${base}`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // })
        fs.writeFileSync(`./salida/FileTabladel${base}`, salida)
        return `FileTabladel${base}`;
    } catch (error) {
        throw(error)
    }
};

module.exports = {
    //funcion: crearArchivo
    crearArchivo
}