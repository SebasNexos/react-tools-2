const { response } = require('express'); 
const jwt = require('jsonwebtoken'); 

const validarJWT = ( req, res = response, next ) => {

    // x-token header 

    const token = req.header('x-token'); 

    // validar tokes 

    if ( !token ) {
        return res.status(401).json({
            ok: false, 
            mgs: 'no hay token en la petición'
        })
    }

    try {

        const { uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED 
        ) 

        req.uid = uid; 
        req.name = name; 

    } catch(error){
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    };
    

    next(); 
}

module.exports = {
    validarJWT
}