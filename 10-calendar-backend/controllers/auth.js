const { response } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')

// creación de la logica para las rutas
const crearUsuario = async(req, res = response ) => { 

    const { email, password } = req.body; // recibir la req y desustructurar la información

    try {
        let usuario = await Usuario.findOne({ email }); 

        if (usuario) {
            return res.status(201).json({ // un status de un buen resultado 
                ok: false,
                msg: 'Un usuario existe con ese correo', 
            });
        }

        usuario = new Usuario( req.body ); // con esto almacenamos al usuario en db
        

        // encritar contraseña para mejorar la seguridad 
        const salt = bcrypt.genSaltSync(); // vueltas necesarias 
        usuario.password = bcrypt.hashSync( password, salt ); // realizar el encriptado de la contraseña


        await usuario.save(); 

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mgs: 'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body; 

    res.status(200).json({
        ok:true,
        msg: 'login',
        email,
        password
    })
    
}; 

const revalidarToken = (req, res = response) => { 
    res.json({
        ok:true,
        msg: 'renew'
    })
}; 

module.exports = { 
    crearUsuario, 
    loginUsuario, 
    revalidarToken 
} // esta es la manera de exportar en express 