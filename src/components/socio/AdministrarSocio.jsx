/* import React, { useState } from 'react'
import AltaSocio from './AltaSocio';

const AdministrarSocio = () => {
  const [mostrarAltaSocio, setMostrarAltaSocio] = useState(false)
  

   const ingresar = () => {
    setMostrarAltaSocio= !mostrarAltaSocio;
    console.log("cambio");
  } 

  
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

          

          { mostrarAltaSocio
                    ?  
                    <button className='btn btn-outline-info' onClick={ingresar}>Crear Socio</button>
                       
                        
                    :
                    <AltaSocio/>
          }
        </div>
      }
    </main>
    
    

  )
}

export default AdministrarSocio */

import React from 'react'

const AdministrarSocio = () => {
  return (
    <div>AdministrarSocio</div>
  )
}

export default AdministrarSocio