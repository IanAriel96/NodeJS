const fs = require('fs');
const axios = require('axios');

class Busquedas {
    historial = [];
    dbPath = './db/database.json';
    constructor() {
        this.readDB();
    }

    get hitorialCapitalizado(){
        // Capitalizar cada palabra
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));

            return palabras.join(' ');
        });
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
        }
    }

    get paramsWeatherAPI(){
        return{
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async ciudad(lugar = '') {
        console.log('ciudad', lugar);
        try {
            // Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/search/geocode/v6/forward?q=${lugar}`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            // return resp.data.features[0].properties;
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.properties.full_address,
                lat: lugar.geometry.coordinates[1],
                lng: lugar.geometry.coordinates[0],
            }));
        } catch (error) {
            console.log("Hubo un error");
            return [];
        }
    }

    async climaLugar(lat,lng){
        try {
            // instance axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`,
                params: this.paramsWeatherAPI
                // este es otro modo de enviar la lat y long con desestructuracion en caso que no queramos poner las variables 
                // lat y long en el baseURL:
                // params: {...this.paramsWeatherAPI, lat, lng}  // OJO el baseURL seria:`https://api.openweathermap.org/data/2.5/weather` 
            });
            // resp.data
            const resp = await instance.get();
            // const clima = resp.data;
            // const resultado = {
            //     id: clima.weather[0].id,
            //     temperature: clima.main.temp,
            //     minTemp: clima.main.temp_min,
            //     maxTemp: clima.main.temp_max,
            //     description: clima.weather[0].description,
            // };
            // usando desestructuracion de datos tambien se puede obtener las variables
            const {weather, main} = resp.data;
            return {
                description:weather[0].description,
                minTemp: main.temp_min,
                maxTemp: main.temp_max,
                temperature: main.temp
            }
            //return resultado;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    agregarHistorial (lugar = ''){
        // TODO: Prevenir duplicidad
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        // este pedaso de codigo solo mantiene 6 items en el historial
        this.historial = this.historial.splice(0,5);

        this.historial.unshift(lugar.toLocaleLowerCase());
        this.saveDB();
    }

    saveDB(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
    readDB(){
        if( !fs.existsSync(this.dbPath) ){
            return null;
        }
        
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse( info );
        this.historial = data.historial;
        
    }
}

module.exports = Busquedas;