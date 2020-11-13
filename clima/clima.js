const axios = require('axios');

const getClima = async(lat,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=32f843d833c38373032f825c4a92418a&units=metric`);

    if (resp.status != '200')
        throw new Error('Error de peticion');
    
    if (resp.data === null || resp.data.main === null)
        return 'No hay datos';
    
    return { ...resp.data.main }

}

module.exports = { getClima }