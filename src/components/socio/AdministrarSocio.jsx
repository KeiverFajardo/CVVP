import React, { useState } from 'react'
import AltaSocio from './AltaSocio';

const AdministrarSocio = () => {
  const [mostrarAltaSocio, setMostrarAltaSocio] = useState(false)
  

 /*  const ingresar = () => {
    setMostrarAltaSocio= !mostrarAltaSocio;
    console.log("cambio");
  } */

  
  function ingresar(e) {
    if (mostrarAltaSocio) {
      setMostrarAltaSocio = false;
    }
    else
    {
      setMostrarAltaSocio = true;
    }
    
    console.log("cambio");
  }
    



  return (
    <main>
      {
        <div>
      
          <div>AdministrarSocio</div>
          <br />

          <button className='btn btn-outline-info' onChange={ingresar}>Crear Socio</button>

          { mostrarAltaSocio
                    ?  
                        <div>Hola
                        </div>
                        
                    :
                    <AltaSocio/>
          }
        </div>
      }
    </main>
    
    

  )
}

export default AdministrarSocio