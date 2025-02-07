// es para hacer la creación del JWT 

// paquete necesario npm i jsonwebtoken

const jwt = require('jsonwebtoken'); 

// necesitamos trabajar con promesas 

const generarJTW = ( uid, name ) => {

return new Promise((resolve, reject) => {

    const payload = { uid, name }; 

    jwt.sign( payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '2h'
    }, (err, token) => {
        if ( err ) {
            console.log(err); 
            reject('No se pudo generar el token')
        }

        resolve( token ); 

    })


})

}

module.exports = {
    generarJTW
}