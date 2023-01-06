// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos

class Bodega{
datosBodega={
  fechaIngreso:"",
  productor:"",
  variedad:"",
  altura:0,
  cantidad:0, 
  precio:0,
}
  validarBodega(fechaIngreso, productor, variedad, altura, cantidad, precio){
    
    if(fechaIngreso==="", productor==="", variedad==="", altura=0, cantidad=0, precio=0){
      alert("Falta ingresar un dato");
    }
    else{
      alert("Datos ingresados con exito");
    }
  }
}

var instaBodega=new Bodega();