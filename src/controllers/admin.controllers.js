// Invocamos a la conexion de la DB
import connection from '../db.js';

export const adminInicio = (req, res)=>{
    res.render('admin')
} 

// Ingresamos a la BD los datos Requeridos en el modal de bodega
export const createBodega = (req, res)=>{
    const fechaCompra = req.body.dateFechaBodega;
    const productor = req.body.textNombreProductorBodega;
    const variedad = req.body.selectVariedadBodega;
    const altura = req.body.numberAlturaBodega;
    const cantidad = req.body.numberCantidadBodega;
    const precio = req.body.numberPrecioBodega;

    const arrayIdBode = [fechaCompra, variedad, precio];

    const idBodegaFin = arrayIdBode.toString();

    console.log(fechaCompra, productor, variedad, altura, cantidad, precio, idBodegaFin)

    connection.query('INSERT INTO tbl_bodega SET ?', { idProductoBode:idBodegaFin, fechaCompra:fechaCompra, productorBode:productor, 	variedadBode:variedad , alturaBode:altura, 	cantidadBode:cantidad, precioBode:precio}, async(error, results)=>{
        if(error){
            console.log(error)
            res.render('bodega', {
                alert: true,
                alertTitle: "Error",
                alertMessage: "No se pudo Ingresar el dato",
                alertIcon:'error',
                showConfirmButton: true,
                timer: false,
                ruta: 'bodega'    
            });
        }else{
            res.render('bodega', {
                alert: true,
                alertTitle: "Se ve todo bien",
                alertMessage: " ¡Si se Ingreso el dato! ",
                alertIcon: "success",
                showConfirmButton: false,
                timer: 1500,
                ruta: 'bodega'
             })
        }
    })
}
// Traemos el id de bodega para mostrarlo el el modal de trilladora y asi saber a que producto
// se le va a hacer lo requerido en el mdoal de trilladora
export const traerIdBodega = (req, res)=>{
    connection.query('SELECT idProductoBode FROM tbl_bodega', async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
}

export const adminTostadora = (req, res)=>{
    res.render('tostadora')
}