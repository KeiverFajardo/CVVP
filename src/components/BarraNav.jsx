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
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Configuracion">Configuracion</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="nav-item">
                       <a className="dropdown-item" href="/AltaUsuario">Alta Usuario</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/AdministrarUsuario">Administrar Usuario</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Socio
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li className="nav-item">
                    <a className="nav-link" href="/AltaSocio">Alta Socio</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                       <a className="dropdown-item" href="/AdministrarSocio">Administrar Socio</a>
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