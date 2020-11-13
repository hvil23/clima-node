const opts = {
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}

const argv = require('yargs').options(opts).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        const coords = await(lugar.getLugar(direccion));
        const temp = await(clima.getClima(coords.lat,coords.lng));
        return `El clima de ${direccion} es de ${temp.temp} grados C`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


