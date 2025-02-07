const { response } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')
const { generarJTW } = require('../helpers/jwt')

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


        await usuario.save(); // guardar usuario 

        // Generar JWT 
        const token = await generarJTW( usuario.id, usuario.name );

        res.json({
            ok: true, 
            uid: usuario.id,
            name: usuario.name, 
            token
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mgs: 'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body; 

    try {
        
        const usuario = await Usuario.findOne({ email }); // encontrar usuario con ese email 

        if ( !usuario ) {
            return res.status(400).json({ // un status de un buen resultado 
                ok: false,
                msg: 'El usuario no existe con ese email', 
            });
        }

        // confirmar los password


        const validPassword = bcrypt.compareSync( password, usuario.password ); // comparar los users

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false, 
                mag: 'password incorrecto'
            })
        }
        

        // Generar JWT 
        const token = await generarJTW( usuario.id, usuario.name );

        res.json({
            ok: true, 
            uid: usuario.id,
            name: usuario.name, 
            token
        })


    } catch(error) {
        console.log(error); 
        res.status(500).json({ 
            ok: false,
            msg: 'Por favor hable con el administrador', 
        });
    }
    
}; 

// construir los tokens 
const revalidarToken = async(req, res = response) => { 

    const { uid, name } = req; 

    // generar un nuevo token y retornarlo en esta petición 

    const token = await generarJTW( uid, name ); 


    res.json({
        ok:true,
        token
    })
}; 

module.exports = { 
    crearUsuario, 
    loginUsuario, 
    revalidarToken 
} // esta es la manera de exportar en express 