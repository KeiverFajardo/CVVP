import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";


//import '../styles/styles.css'


const BarraNav = () => {
  return (
    <Navbar className="menu-fixed">
    <Container>
        <Link exact to='/'>
            <Navbar.Brand exact to="/" className="text-uppercase active">
                <li class="nav-item"><a class="nav-link navlink2" href="#home">CVVP.</a></li>
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav text-uppercase ms-auto container">

                <NavLink exact to='/' activeClassName="active">
                    <li class="nav-item"><a class="nav-link" href="#">Mouse</a></li>
                </NavLink>

                <NavLink exact to='/' activeClassName="active">
                    <li class="nav-item"><a class="nav-link" href="#">Laptop</a></li>
                </NavLink>

            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default BarraNav