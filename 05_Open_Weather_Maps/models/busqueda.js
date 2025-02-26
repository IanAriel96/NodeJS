const axios = require('axios');

class Busquedas {
    historial = ['Madrid', 'Quito', 'Bogota'];
    constructor() {

    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
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

}

module.exports = Busquedas;