/*****************************************************************************
 * 
 * Import packages
 * 
 */
 const { Router } = require( 'express' );
 const { check } = require( 'express-validator' );
 const router = Router();

 /*****************************************************************************
 * 
 * Middlewares
 * 
 */
const { validarCampos } = require('../middleware/validar-campos');

/*****************************************************************************
 * 
 * Controller
 * 
 */
const { 
  login 
} = require( '../controllers/auth' );

/*****************************************************************************
 * 
 * Routes
 * 
 */
router.post( 
  '/login',
  [
    check( 'email', 'El email es obligatorio' ).isEmail(),
    check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
    validarCampos
  ],
  login 
);


module.exports = router;
