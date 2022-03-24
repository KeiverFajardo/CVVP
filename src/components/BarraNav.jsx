import React from 'react'
/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";


import './style.css'


const BarraNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fondo">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">CVVP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mantenimiento de archivos
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li class="nav-item dropdown">
                    <li className="nav-item">
                        <a className="nav-link" href="/AdministrarSocio">Socios</a>
                        </li>
                        <hr />
                        <hr />
                    </li>
                    <li className="nav-item">
                        <a className="dropdown-item" href="/Familiares">Familiares</a>
                    </li>
                    <hr />
                    <hr />
                    <li class="nav-item dropdown">
                         <li className="nav-item">
                          Tablas Auxiliares
                          </li>
                        <hr />
                     
                        <li className="nav-item">
                          <a className="nav-link" href="/Categorias">Categorias</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/PeriodosDeCobranza">Periodos de cobranza</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/Radios">Radios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/Servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/ParametrosDeEdadDeServicios">Parametros de edad de servicios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/GrupoDeAfinidadDeServicios">Grupo de afinidad de servicios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/Comentarios">Comnetarios</a>
                        </li>
                      
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Procesos
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="nav-item">
                       <a className="dropdown-item" href="/GeneracionDeValoresFijos">Generacion de valores fijos</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/GeneracionMensualDeValores">Generacion mensual de valores</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/IngresoDePagos">Ingreso de pagos</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/AnulacionDePagos">Anulacion de pagos</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/IngresoDeReciboMensual">Ingreso de recibo mensual</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoDePlantillaDeCobro">Listado de plantilla de cobro</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/AnulacionDeGeneracionDeValoresFijos">Anulacion de generacion de valores fijos</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Emision de documentos
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li className="nav-item">
                    <a className="nav-link" href="/EmisionDeRecibos">Emision de recibos</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoResumidoDeEmision">Listado resumido de emision</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoCuadroDeEmision">Listado cuadro de emision</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Deudores
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li className="nav-item">
                    <a className="nav-link" href="/CuentaCorrienteDeSocios">Cuenta corriente de socios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/InventarioDeRadios">Inventario de radios</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/DeudaDeSocios">Deuda de socios</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/DetalleDeDeudaDeServicios">Detalle de deuda de servicios</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Adm de radios
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li className="nav-item">
                    <a className="nav-link" href="/CuentaCorrienteDeRadios">Cuenta corriente de radios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/DetalleDeCobranza">Detalle de cobranza</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/Transferencias_y_Anulaciones">Transferencias y anulaciones</a>
                    </li>
                    <li className="nav-item">
                       <a className="dropdown-item" href="/DiarioDeTransferencias">Diario de transferencias</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Listados
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li className="nav-item">
                    <a className="nav-link" href="/ListadoDeSocios">Listado de socios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/ListaDeFamiliares">Lista de familiares</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoDeSociosDadosDeBaja">Listado de socios dados de baja</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoDeAfiliadosAServicios">Listado de afiliados a servicios</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/ListadoDeAltaYBajaDeServicios">Listado de alta y baja de servicios</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Configuracion
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                       <a className="dropdown-item" href="/AltaUsuario">Usuarios</a>
                    </li>
                  </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default BarraNav