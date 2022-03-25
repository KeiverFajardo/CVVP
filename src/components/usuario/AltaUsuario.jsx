import React from 'react';
import { useState } from 'react';
import AdministrarUsuario from './AdministrarUsuario';
import '../style.css'
import { useForm } from '../../hooks/useForm';

const initialForm = {
    usuario: '',
    contraseña: '',
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

    if(!form.contraseña.trim()){
        errors.contraseña = "El campo 'Contraseña' es requerido";
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

    if(!form.nombre.trim()){
        errors.estado = "El campo 'Estado' es requerido";
    }else if (!regexName.test(form.estado.trim())){
        errors.estado = "El campo 'Estado' solo acepta letras y espacios en blanco";
    }
    
    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

const AltaUsuario = () => {
    const {form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm(initialForm, validationsForm);



    const [formData, setFormData] = useState({
      usuario: '',
      contraseña: '',
      nombre: '',
      apellido: '',
      estado: ''
  })
  
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    let  orden = {}

    console.log("Si llega a enviar")

    /* orden.date = firebase.firestore.Timestamp.fromDate(new Date());

    orden.buyer = formData

    orden.total = precioTotal();
  
    orden.items = carList.map(cartItem => {
        const id = cartItem.item.id;
        const title = cartItem.item.nombre;
        const price = cartItem.item.precio * cartItem.cant;

        return {id, title, price}
    })

    const db = getFirestore();
    const ordersCol = db.collection('orders');


    ordersCol.add(orden)
    .then((IdDocumento) => {
        console.log(IdDocumento.id);
        setNOrden(IdDocumento.id);
        setVenta(true)
    })
    .catch( err => {
        console.log(err);
    })
    .finally(() => {
        setFormData({
            name: '',
            tel: '',
            email: '',
            email2: ''

        })
  
        console.log('termino la promesa')
    })

  //actualiza todos los items que estan en el listado del cart del cartcontext
    const itemsToUpdate = db.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in', carList.map(i => i.item.id)
    )

    const batch = db.batch();

    itemsToUpdate.get()
    .then( collection=> {
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - carList.find(item => item.item.id === docSnapshot.id).cant
            })
        })

        batch.commit().then(res => {
            console.log('resultado batch', res)
        })
    })
    console.log(orden) */
    
}


function handleOnChange(e) {
    
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    

}

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
                                                  placeholder='Ingrese contraseña'
                                                  name='contraseña' 
                                                  //value={formData.contraseña}
                                                  required
                                                  value={form.contraseña}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                              />
                                            </div>
                                            {errors.contraseña && <p style={styles}>{errors.contraseña}</p>}
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
                                                  type="text"
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

    </>
    
  )
}

export default AltaUsuario