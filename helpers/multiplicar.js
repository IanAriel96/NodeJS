const fs = require('fs');

const crearArchivo = async (base = 5) => {
    try {
        console.log('========================');
        console.log('   Tabla del:', base);
        console.log('========================');
        let salida = '';
        for (let x = 1; x <= 10; x++) {
            //console.log(`5 x ${x} = ${5*x}`);
            salida += `${base} x ${x} = ${base * x}\n`;
        }
        console.log(salida);
        // fs.writeFile(`FileTabladel-${base}`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // })
        fs.writeFileSync(`FileTabladel${base}`, salida)
        return `FileTabladel${base}`;
    } catch (error) {
        throw(error)
    }
};

module.exports = {
    //funcion: crearArchivo
    crearArchivo
}