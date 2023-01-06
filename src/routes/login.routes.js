import { Router } from 'express';
import { createAdmin, auteticaAdmin, controlerAdmin, cerraSesion, limpiarCache, bodegaAdmin, trilladoraAdmin, tostadoraAdmin } from '../controllers/login.controllers.js'

const router = Router()

// Método para la REGISTRACIÓN EN CASO DE AGREGAR QUE SE REGISTRE UN ADMINISTRADOR
router.post('/register', createAdmin)

// Metodo para la autenticacion
router.post('/auth', auteticaAdmin);

// Método para controlar que está auth en todas las vistas del modulo administrador y validación si la sesión esta activa o no
// AQUI DEBERAN ESTAR TODAS LAS VISTAS QUE TENDRA EL MODULO ADMINISTRADOR
router.get('/admin', controlerAdmin);
router.get('/bodega', bodegaAdmin);
router.get('/trilladora', trilladoraAdmin);
router.get('/tostadora', tostadoraAdmin);

// Destruye la sesión.
router.get('/logout', cerraSesion);

// Para limpiar la caché luego de destruir sesión
router.use(limpiarCache);

export default router