import { Router } from 'express';
import { adminInicio, traerIdBodega, adminTostadora, createBodega } from '../controllers/admin.controllers.js'

const router = Router()

// pagina de aterrizaje
router.get('/admin', adminInicio);

router.post('/authBodega', createBodega)

router.get('/trilladoraAdmin', traerIdBodega);

router.get('/tostadora', adminTostadora);

export default router