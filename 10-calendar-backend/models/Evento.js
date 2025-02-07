const { Schema, model } = require('mongoose'); 

const EventoSchema = Schema({ 

    title: {
        type: String, 
        required: true
    },
    notes: {
        type: String
    }, 
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date, 
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, // esto es para crear una referencia para que mongo entienda
        ref: 'Usuario',               // quien hizo la nota 
        required: true
    }
    
}); 

EventoSchema.method('toJSON', function() { // esto es una configuración extra como un tipo de modificación voluntaria
    const { __v, _id, ...object } = this.toObject(); 
    object.id = _id; 
    return object; 
})


module.exports = model('Evento', EventoSchema); 