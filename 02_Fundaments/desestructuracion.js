const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

////////CASO 1////////////
//console.log(deadpool.getNombre());

// const nombre    = deadpool.nombre;    
// const apellido  = deadpool.apellido;
// const poder     = deadpool.poder;

// ////////////////CASO 2 //////////////////
// function imprimirHeroe(heroe){
//     const { nombre, apellido, poder, edad = 0 } = heroe;
//     console.log(nombre,apellido,poder, edad);
// }
// imprimirHeroe (deadpool);

////////////////CASO 3 - Desestructuracion //////////////

function imprimirHeroe({nombre, apellido, poder, edad = 0}){
    nombre = 'Ian';
    console.log(nombre,apellido,poder,edad);
}
imprimirHeroe(deadpool)

////////////////CASO 4 - Desestructuracion /////////////////////

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, ,h3] = heroes;

console.log(h1, h3);

