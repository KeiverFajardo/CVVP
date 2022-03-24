import React from 'react';
import { useState } from 'react';
import AdministrarUsuario from './AdministrarUsuario';
import '../style.css'

const AltaUsuario = () => {
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
                                        
                                        onSubmit={handleOnSubmit}
                                        onChange={handleOnChange}
                                    >
                                        <div className="col col-6 centrar">

                                          

                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="text"
                                                  placeholder='Ingrese el usuario'
                                                  name='usuario' 
                                                  value={formData.usuario}
                                                  required
                                              />
                                            </div>
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                  type="password"
                                                  placeholder='Ingrese contraseña'
                                                  name='contraseña' 
                                                  value={formData.contraseña}
                                                  required
                                              />
                                            </div>
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el nombre'
                                                  name='nombre' 
                                                  value={formData.nombre}
                                                  required
                                              />
                                            </div>
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el apellido'
                                                  name='apellido' 
                                                  value={formData.apellido}
                                                  required
                                              />
                                            </div>
                                            <br />
                                            <div className="centrar col col-6">
                                              <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                  type="text"
                                                  placeholder='Ingrese el estado'
                                                  name='estado' 
                                                  value={formData.estado}
                                                  required
                                              />
                                            </div>
                                           <br />
                                           <br />
                                            {/* (formData.required) ?  */
                                            <div class="centrar col col-6">
                                               <button className="btn btn-outline-success w-50 mt-2">Ingresar Usuario</button>
                                            </div>
                                            
                                
                                                                                       /*  : <p></p> */
                                            }
                                            
                                            
                                      
                                            
                                        </div>
        </form>

        <AdministrarUsuario/>
    </>
    
  )
}

export default AltaUsuario