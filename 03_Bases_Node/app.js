const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')

console.clear();


//console.log(process.argv);

/////////////// CASO 1 de obtener valores por consola y desestructurarlos ///////////////
// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base=5] =arg3.split('=');



// const base =3;

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'Crado'))
    .catch(err=>console.log(err));


