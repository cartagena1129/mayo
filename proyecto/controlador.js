let boton=document.getElementById("boton")

let nombre=document.getElementById("Nombre")

let cedula=document.getElementById("cedula")

let fecha=document.getElementById("fecha")

// detectando evento del click en el boton del formulario
boton.addEventListener("click", function(evento){
    evento.preventDefault()
    let errores=[]

    let valorNombre= nombre.value
    if (!valorNombre){
        nombre.classList.add("is-invalid")
        errores.push("El Nombre Es Obligatorio")
    }
    
    
    let valorcedula= cedula.value
    if (!valorcedula){
        cedula.classList.add("is-invalid")
        errores.push("La Cedula Es Obligatoria")
       }
    
       let valorfecha= fecha.value
       if (!valorfecha){
           fecha.classList.add("is-invalid")
           errores.push("La Fecha Es Obligatoria")
          }

          if(errores.length>0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Revisa Que Tienes Campos Por Llenar',
              })

          }else{
               
            let datos={
                nombreUsuario:valorNombre,
                cedulaUsuario: valorcedula,
                fechaUsuario: valorfecha
            }
           
            console.log(datos)
            
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            )

          }
       
  
   // console.log("Hola")

})

