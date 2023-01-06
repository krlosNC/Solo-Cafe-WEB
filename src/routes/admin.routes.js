import { Router } from 'express';
import { adminInicio, adminBodega, adminTrilladora, adminTostadora } from '../controllers/admin.controllers.js'

const router = Router()

// pagina de aterrizaje
router.get('/admin', adminInicio);
router.get('/bodega', adminBodega);
router.get('/trilladora', adminTrilladora);
router.get('/tostadora', adminTostadora);

export default router