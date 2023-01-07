//Invocamos a bcrypt
import bcryptjs from 'bcryptjs';
// Invocamos a la conexion de la DB
import connection from '../db.js';

// Por si quiero registrar un nuevo administrador
export const createAdmin = async (req, res)=>{
    const name = req.body.name;
	const cedula = req.body.cedula;
	const usuario = req.body.usuario;
    const password = req.body.password;

    let passHaas = await bcryptjs.hash(password, 8);
    connection.query('INSERT INTO tbl_usuario SET ?', { nombre:name, cedula:cedula, usuario:usuario , contraseña:passHaas}, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Si se ingreso el dato")
        }
    })
}

// Autenticación de login admin
export const auteticaAdmin = async (req, res)=> {
	const userAdmin = req.body.userAdmin;
    const adminContra = req.body.passwordAdmin;

    let passHaas = await bcryptjs.hash(adminContra, 8)

     if(userAdmin && adminContra){
        connection.query('SELECT * FROM tbl_usuario WHERE usuario=?', [userAdmin], async (error , results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(adminContra, results[0].contraseña))){
                 res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "USUARIO y/o CONTRASEÑA incorrecta",
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'    
                });
            }else{
                req.session.loggedin = true;
                req.session.name = results[0].name;
                req.session.email = results[0].email;
                res.render('login', {
                    alert: true,
                    alertTitle: "Bienvenido administrador SOLO-CAFE",
                    alertMessage: " ¡LOGIN CORRECTO! ",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'admin'
                 })
            }
        })
    }else{
        res.render('login', {
            alert: true,
            alertTitle: "Advertencia",
            alertMessage: " ¡Por favor, llene los campos requeridos! ",
            alertIcon: "warning",
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
         })
    }
}

// CONTROLAR QUE EL AUTH ESTE EN TODAS LAS VISTAS DEL MODULO ADMINISTRADOR
export const controlerAdmin = (req, res)=> {
	if(req.session.loggedin){
        res.render('admin', {
            login: true,
            name: req.session.name
        });
    }else{
        res.render('404', {
            login: false
        })
    }
}

export const bodegaAdmin = (req, res)=> {
	if(req.session.loggedin){
        res.render('bodega', {
            login: true,
            name: req.session.name
        });
    }else{
        res.render('404', {
            login: false
        })
    }
}

export const trilladoraAdmin = (req, res)=> {
	if(req.session.loggedin){
        res.render('trilladora', {
            login: true,
            name: req.session.name
        });
    }else{
        res.render('404', {
            login: false
        })
    }
}

export const tostadoraAdmin = (req, res)=> {
	if(req.session.loggedin){
        res.render('tostadora', {
            login: true,
            name: req.session.name
        });
    }else{
        res.render('404', {
            login: false
        })
    }
}

// CERRAR SESIÓN DEL MODULO ADMINISTRADOR
export const cerraSesion = (req, res)=> {
	req.session.destroy(()=>{
        res.redirect('/')
    })
}

// Para limpiar la caché luego de destruir sesión

export const limpiarCache = (req, res, next)=> {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
}