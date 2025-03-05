require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busqueda');


const main = async () => {

    const busquedas = new Busquedas();
    let opt;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // Mostrar Lugares
                const termino = await leerInput('Ciudad: ');

                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);

                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSelec = lugares.find(l => l.id === id);

                // Guardar en DB
                busquedas.agregarHistorial(lugarSelec.nombre);
                // Clima
                const clima = await busquedas.climaLugar(lugarSelec.lat, lugarSelec.lng)
                // Mostrar Resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSelec.nombre);
                console.log('Lat:', lugarSelec.lat);
                console.log('Lng:', lugarSelec.lng);
                console.log('Temperature: ', clima.temperature);
                console.log('Minima: ', clima.minTemp);
                console.log('Maxima: ', clima.maxTemp);
                console.log('Descripcion: ', clima.description.green);

            break;
            case '2':
                busquedas.hitorialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })
            break;
        }
        if (opt !== '0') await pausa();
        // const texto = await leerInput('Hola: ');
        // console.log(texto);

    } while (opt !== '0')
}


main();