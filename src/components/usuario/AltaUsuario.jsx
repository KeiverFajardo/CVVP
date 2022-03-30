import React from 'react';
import { useState } from 'react';
import AdministrarUsuario from './AdministrarUsuario';
import '../style.css'
import { useForm } from '../../hooks/useForm';
import Loader from '../Loader';
import Message from '../Messaje';

const initialForm = {
    usuario: '',
    clave: '',
    tipo: '',
    nombre: '',
    apellido: '',
    estado: ''
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //  let regexComments = /^.{1,255}$/;

    if(!form.usuario.trim()){
        errors.usuario = "El campo 'Usuario' es requerido";
    }else if (!regexName.test(form.usuario.trim())){
        errors.usuario = "El campo 'Usuario' solo acepta letras y espacios en blanco";
    }

    if(!form.clave.trim()){
        errors.clave = "El campo 'clave' es requerido";
    }

    if(!form.tipo.trim()){
        errors.tipo = "El campo 'tipo' es requerido";
    }

    if(!form.nombre.trim()){
        errors.nombre = "El campo 'Nombre' es requerido";
    }else if (!regexName.test(form.nombre.trim())){
        errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.apellido.trim()){
        errors.apellido = "El campo 'Apellido' es requerido";
    }else if (!regexName.test(form.apellido.trim())){
        errors.apellido = "El campo 'Apellido' solo acepta letras y espacios en blanco";
    }

    if(!form.estado.trim()){
        errors.estado = "El campo 'Estado' es requerido";
    }
    
    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const AltaUsuario = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm(initialForm, validationsForm);

  return (
    <>
        <h2>ALTA DE USUARIOS</h2>  
        <p className="datos">Ingrese los datos para ingresar un usuario</p>
        <hr />
        <form className="card col-12 formulario centrar"
                onSubmit={handleSubmit}                        
            //onSubmit={handleOnSubmit}
           // onChange={handleOnChange}
                                    >
                                        <div className="col col-6 centrar">

                                          

                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese el usuario'
                                                  name='usuario' 
                                                  //value={formData.usuario}
                                                  value={form.usuario}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                              {errors.usuario && <p style={styles}>{errors.usuario}</p>}
                                            </div>
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="password"
                                                  placeholder='Ingrese clave'
                                                  name='clave' 
                                                  //value={formData.clave}
                                                  required
                                                  value={form.clave}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.clave && <p style={styles}>{errors.clave}</p>}
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="number"
                                                  placeholder='Ingrese tipo'
                                                  name='tipo' 
                                                  //value={formData.clave}
                                                  required
                                                  value={form.tipo}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.tipo && <p style={styles}>{errors.tipo}</p>}
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el nombre'
                                                  name='nombre' 
                                                  //value={formData.nombre}
                                                  required
                                                  value={form.nombre}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  
                                              />
                                            </div>
                                            {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el apellido'
                                                  name='apellido' 
                                                  //value={formData.apellido}
                                                  required
                                                  value={form.apellido}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="number"
                                                  placeholder='Ingrese el estado'
                                                  name='estado' 
                                                 // value={formData.estado}
                                                  required
                                                  value={form.estado}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.estado && <p style={styles}>{errors.estado}</p>}
                                           <br />
                                           <br />
                                           <input type="submit" value="Enviar" />
                                            {/* 
                                            <div class="centrar col col-6">
                                               <button className="btn btn-outline-success w-50 mt-2">Ingresar Usuario</button>
                                            </div>
                                            
                                
                                             */}
                                            
                                            
                                      
                                            
                                        </div>
        </form>
        {loading && <Loader/>}
        {response && (
            <Message msg="Los datos han sido enviados" bgColor="#198754" />
        )}                                     
    </>
    
  )
}

export default AltaUsuario