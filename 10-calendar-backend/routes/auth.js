/**
 * Rutas de usuarios /Auth
 * host + /api/auth (/new)
 */


const { Router } = require('express'); // esto no consume recursos 
const { check } = require('express-validator')
const router = Router(); 


const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth'); // exportación del archivo auth de controler 
const { validarCampos } = require('../middlewares/validar-campos');

// Especificaciones de las diferentes rutas 
router.post(
    '/new', 
    [ // middlewarers
        check('name', 'El nombre es obligatorio').not().notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6}),
        validarCampos // llamar la función de los middlewares 
    ], 
    crearUsuario) // obligar a que tenga unos parametros
router.post(
    '/', 
    [// middlewares 
        check('email', 'El email es obligatorio').isEmail(), 
        check('password', 'La contraseña es obligatoria en este campo').isLength({ min: 6}).not(),
        validarCampos // llamar la función de los middlewares 
    ],
    loginUsuario) // obligar que tenga parametros 
router.get('/renew', revalidarToken)


// exportar el router en node 
module.exports = router; 


