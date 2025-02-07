// ruta /api/events + .../ 

const { Router } = require('express'); 
const { check } = require('express-validator')

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


const router = Router(); 


router.use( validarJWT ); 
 
// Todas tinen que pasar por la validación del JWT 
// obtener eventos
router.get('/', getEventos); 

// crear evento
router.post(
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(), 
        check('start', 'Fecha de inicio obligatoria').custom( isDate ), // validación hecha por nosotros 
        check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento); 

// actualizar evento 
router.put('/:id', actualizarEvento);

// eliminar evento 
router.delete('/:id', eliminarEvento);


module.exports = router; 