import React from 'react'
import { useState } from 'react'
import Loader from '../Loader';
import Message from '../Messaje';
import { useFormSocio } from '../../hooks/useFormSocio';

const initialFormSocio = {
    numero_socio: '',
    nombre_completo: '',
    ci: '',
    nacimiento: '',
    ruc: '',
    direccion: '',
    direccion_cobro: '',
    radio:'',
    ruta:'',
    categoria:'',
    fecha_de_alta:'',
    fecha_de_baja:'',
    activo:'',
    periodo_cobranza:'',
    telefono:'',
    fax:'',
    celular:'',
    email:'',
    comentarios:'',
}

const validationsFormSocio = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.numero_socio.trim()){
      errors.numero_socio = "El campo 'numero_socio' es requerido";
  }

  if(!form.nombre_completo.trim()){
      errors.nombre_completo = "El campo 'nombre_completo' es requerido";
  }

  if(!form.ci.trim()){
      errors.ci = "El campo 'ci' es requerido";
  }

  if(!form.nacimiento.trim()){
      errors.nacimiento = "El campo 'nacimiento' es requerido";
  }

  if(!form.ruc.trim()){
      errors.ruc = "El campo 'ruc' es requerido";
  }

  if(!form.direccion.trim()){
    errors.direccion = "El campo 'direccion' es requerido";
}

if(!form.direccion_cobro.trim()){
    errors.direccion_cobro = "El campo 'direccion_cobro' es requerido";
}

if(!form.radio.trim()){
    errors.radio = "El campo 'radio' es requerido";
}

if(!form.ruta.trim()){
    errors.ruta = "El campo 'ruta' es requerido";
}

if(!form.categoria.trim()){
    errors.categoria = "El campo 'categoria' es requerido";
}

  if(!form.fecha_de_alta.trim()){
      errors.fecha_de_alta = "El campo 'fecha_de_alta' es requerido";
  }

  if(!form.radio.trim()){
    errors.radio = "El campo 'fecha_de_baja' es requerido";
}

if(!form.activo.trim()){
    errors.activo = "El campo 'activo' es requerido";
}

if(!form.periodo_cobranza.trim()){
    errors.periodo_cobranza = "El campo 'periodo_cobranza' es requerido";
}

  if(!form.telefono.trim()){
      errors.telefono = "El campo 'telefono' es requerido";
  }

  if(!form.fax.trim()){
    errors.fax = "El campo 'fax' es requerido";
}

if(!form.celular.trim()){
    errors.celular = "El campo 'celular' es requerido";
}

if(!form.email.trim()){
    errors.email = "El campo 'email' es requerido";
}else if (!regexEmail.test(form.email.trim())) {
  errors.email = "El campo 'email' es incorrecto";
}
  if(!form.comentarios.trim()){
      errors.comentarios = "El campo 'comentarios' es requerido";
  } else if (!regexComments.test(form.comentarios.trim())) {
    errors.comentarios = "El campo 'comentarios' no debe exceder los 255 caracteres";
  
  return errors;
  }
}

let styles = {
  fontWeight: "bold",
  color: "#dc3545"
}

const AltaSocio = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormSocio(initialFormSocio, validationsFormSocio);



  return (
    <>
        <h2>ALTA DE SOCIOS</h2>  
        <br />
        <p className="datos">Ingrese los datos para ingresar un socio</p>

        <hr />
        <form className="formulario centrar padre"
                                        onSubmit={handleSubmit}
                                        //onSubmit={handleOnSubmit}
                                        //onChange={handleOnChange}
                                    >
                                        

                                            
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese el numero de socio'
                                                  name='numero_socio' 
                                                  value={form.numero_socio}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.numero_socio && <p style={styles}>{errors.numero_socio}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese nombre completo'
                                                  name='nombre_completo' 
                                                  value={form.nombre_completo}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.nombre_completo && <p style={styles}>{errors.nombre_completo}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese ci'
                                                  name='ci' 
                                                  value={form.ci}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.ci && <p style={styles}>{errors.ci}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese nacimiento'
                                                  name='nacimiento' 
                                                  value={form.nacimiento}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.estado && <p style={styles}>{errors.estado}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el ruc'
                                                  name='ruc' 
                                                  value={form.ruc}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.ruc && <p style={styles}>{errors.ruc}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el direccion'
                                                  name='direccion' 
                                                  value={form.direccion}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.direccion && <p style={styles}>{errors.direccion}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el direccion de cobro'
                                                  name='direccion_cobro' 
                                                  value={form.direccion_cobro}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.direccion_cobro && <p style={styles}>{errors.direccion_cobro}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese radio'
                                                  name='radio' 
                                                  value={form.radio}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.radio && <p style={styles}>{errors.radio}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese ruta'
                                                  name='ruta' 
                                                  value={form.ruta}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.ruta && <p style={styles}>{errors.ruta}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese categoria'
                                                  name='categoria' 
                                                  value={form.categoria}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.categoria && <p style={styles}>{errors.categoria}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese fecha de alta'
                                                  name='fecha_de_alta' 
                                                  value={form.fecha_de_alta}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.fecha_de_alta && <p style={styles}>{errors.fecha_de_alta}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese fecha de baja'
                                                  name='fecha_de_baja' 
                                                  value={form.fecha_de_baja}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.fecha_de_baja && <p style={styles}>{errors.fecha_de_baja}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese activo'
                                                  name='activo' 
                                                  value={form.activo}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.activo && <p style={styles}>{errors.activo}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese periodo de cobranza'
                                                  name='periodo_cobranza' 
                                                  value={form.periodo_cobranza}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.periodo_cobranza && <p style={styles}>{errors.periodo_cobranza}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese telefono'
                                                  name='telefono' 
                                                  value={form.telefono}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.telefono && <p style={styles}>{errors.telefono}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese fax'
                                                  name='fax' 
                                                  value={form.fax}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.fax && <p style={styles}>{errors.fax}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el celular'
                                                  name='celular' 
                                                  value={form.celular}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.celular && <p style={styles}>{errors.celular}</p>}
                                            <br />
                                            <div className="centrar form-group col-md-5">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el email'
                                                  name='email' 
                                                  value={form.email}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.email && <p style={styles}>{errors.email}</p>}
                                          <br />
                                          {/* <div className="centrar form-group col-md-12">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el comentario'
                                                  name='comentarios' 
                                                  value={form.comentarios}
                                                  required
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div> */}
                                            {errors.comentarios && <p style={styles}>{errors.comentarios}</p>}
                                            
                                            {/* (form.required) ?  */
                                          /*  <div class="centrar col col-6">
                                              <button className="btn btn-outline-success w-50 mt-2">Ingresar Socio</button>
                                            </div> */
                                            
                                
                                                                                      /*  : <p></p> */
                                            }
                                           
                                            
                                           <div className="centrar form-group col-md-5">
                                        <input type="submit" value="Enviar" className="btn btn-outline-success w-50 mt-2"/>
                                        </div>
                                        <hr />
                                            <br />
        </form>
        {loading && <Loader/>}
          {response && (
              <Message msg="Los datos han sido enviados" bgColor="#198754" />
          )}  
    </>
  
  )
}

export default AltaSocio