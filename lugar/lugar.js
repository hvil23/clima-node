const axios = require('axios');

const getLugar = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    
    let instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=327ce95705a448af8866be54da682094&language=es&pretty=1`
    });

    const resp = await instance.get();

    if (resp.status != '200')
        throw new Error('Error de peticion');
    
    if (resp.data.results === null || resp.data.results.length === 0)
        throw new Error('No hay datos');
    
    const data = resp.data.results[0];
 
    return { dir: data.formatted, ...data.geometry }
}

module.exports = { getLugar }