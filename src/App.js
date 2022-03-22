
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import BarraNav from './components/BarraNav';
import AltaUsuario from './components/usuario/AltaUsuario'
import Home from './components/home/Home';
import Configuracion from './components/configuracion/Configuracion';
import AltaSocio from './components/socio/AltaSocio';
import AdministrarSocio from './components/socio/AdministrarSocio';
import AdministrarUsuario from './components/usuario/AdministrarUsuario';

function App() {
  return (
      <>
          
          <div className="App">
            <BarraNav/>
            
            <Routes>
              
                <Route path='/altaUsuario' element={ <AltaUsuario/> } />
                <Route path='/home' element={ <Home/> } />
                <Route path='/configuracion' element={ <Configuracion/> } />
                <Route path='/altaSocio' element={ <AltaSocio/> } />
                <Route path='/administrarUsuario' element={ <AdministrarSocio/> } />
                <Route path='/administrarSocio' element={ <AdministrarUsuario/> } />

            </Routes>
   
            </div>  
      </>
          
  );
}

export default App;
