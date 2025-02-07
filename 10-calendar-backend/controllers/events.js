const { response } = require("express");
const Evento = require("../models/Evento");

//{
//    ok: true,
//    msg: 'getEventos
//}

const getEventos = async(req, res = response) => {

    const eventos = await Evento.find() 
                                        .populate('user', 'name'); // hayar los eventos con el usuario incluido

    res.json({
        ok: true, 
        eventos
    })

}


const crearEvento = async(req, res = response) => {

    const evento = new Evento( req.body ); // manera de obtener todo el evento

    try {

        evento.user = req.uid; // id del usuario

        const eventoGuardado = await evento.save(); // guardar al usuario 

        res.json({
            ok: true, 
            evento: eventoGuardado
        })

    } catch(error) {
        console.log(error); 
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

    res.json({
        ok: true, 
        msg: 'crear evento'
    })

}


const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id; // id de la persona que esta haciendo la petición 
    const uid = req.uid; // id de la persona que hizo la nota 

    try {

        const evento = await Evento.findById( eventoId ); // verificar si hay una persona con ese id 

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: "Elemento no existe con ese id"
            })
        }

        if ( evento.user.toString() !== uid ){ // se comparan los id para ver que el que haga el cambio
            return res.status(401).res({ // sea la misma persona que lo creo 
                ok: false, 
                msg: 'No tiene provilegio de editar este evento'
            })
        }

        // se puede dejar actualizar

        const nuevoEvento = { // es el evento que yo envie a la petición el que tiene los cambios que yo quiero hacer 
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true }); // actualización  

        res.json({
            ok: true, 
            evento: eventoActualizado
        })

    } catch(error) {
        console.log(error); 
        res.status(500).json({
            ok: false, 
            msg: "Hable con el administrador"
        })
    }

}


const eliminarEvento = async(req, res = response) => {

    const eventoId = req.params.id; // id de la persona que esta haciendo la petición 
    const uid = req.uid; // id de la persona que hizo la nota 

    try {

        const evento = await Evento.findById( eventoId ); // verificar si hay una persona con ese id 

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: "Elemento no existe con ese id"
            })
        }

        if ( evento.user.toString() !== uid ){ // se comparan los id para ver que el que haga el cambio
            return res.status(401).res({ // sea la misma persona que lo creo 
                ok: false, 
                msg: 'No tiene provilegio de eliminar este evento'
            })
        }

        // se puede eliminar el evento
        await Evento.findByIdAndDelete( eventoId ); 

        res.json({
            ok: true,
        })

    } catch(error) {
        console.log(error); 
        res.status(500).json({
            ok: false, 
            msg: "Hable con el administrador"
        })
    }

}


module.exports = {
    getEventos, 
    crearEvento,
    actualizarEvento, 
    eliminarEvento
}