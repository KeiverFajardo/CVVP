import React from 'react'
import { useState } from 'react'

const AltaSocio = () => {
  const [formData, setFormData] = useState({
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
})

const handleOnSubmit = (e) =>{
  e.preventDefault()
  let  orden = {}

  console.log("Si llega a enviar socio")

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
      <h2>ALTA DE SOCIOS</h2>  
      <br />
      <p className="datos">Ingrese los datos para ingresar un socio</p>

      <hr />
      <form className="card col col-12 formulario centrar"
                                      
                                      onSubmit={handleOnSubmit}
                                      onChange={handleOnChange}
                                  >
                                      <div className="col col-8 centrar wrap">

                                          
                                          <div className="centrar col col-6 wrap">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                type="text"
                                                placeholder='Ingrese el numero de socio'
                                                name='numero_socio' 
                                                value={formData.numero_socio}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6 wrap">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                type="text"
                                                placeholder='Ingrese nombre completo'
                                                name='nombre_completo' 
                                                value={formData.nombre_completo}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6 wrap">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                type="text"
                                                placeholder='Ingrese ci'
                                                name='ci' 
                                                value={formData.ci}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2 "
                                                type="text"
                                                placeholder='Ingrese nacimiento'
                                                name='nacimiento' 
                                                value={formData.nacimiento}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el ruc'
                                                name='ruc' 
                                                value={formData.ruc}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el direccion'
                                                name='direccion' 
                                                value={formData.direccion}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el direccion de cobro'
                                                name='direccion_cobro' 
                                                value={formData.direccion_cobro}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese radio'
                                                name='radio' 
                                                value={formData.radio}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese ruta'
                                                name='ruta' 
                                                value={formData.ruta}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese categoria'
                                                name='categoria' 
                                                value={formData.categoria}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese fecha de alta'
                                                name='fecha_de_alta' 
                                                value={formData.fecha_de_alta}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese fecha de baja'
                                                name='fecha_de_baja' 
                                                value={formData.fecha_de_baja}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese activo'
                                                name='activo' 
                                                value={formData.activo}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese periodo de cobranza'
                                                name='periodo_cobranza' 
                                                value={formData.periodo_cobranza}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese telefono'
                                                name='telefono' 
                                                value={formData.telefono}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese fax'
                                                name='fax' 
                                                value={formData.fax}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el celular'
                                                name='celular' 
                                                value={formData.celular}
                                                required
                                            />
                                          </div>
                                          <br />
                                          <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el email'
                                                name='email' 
                                                value={formData.email}
                                                required
                                            />
                                          </div>
                                         <br />
                                         <div className="centrar col col-6">
                                            <input className="btn btn-outline-info w-50 mt-2 mr-2"
                                                type="text"
                                                placeholder='Ingrese el comentarios'
                                                name='comentarios' 
                                                value={formData.comentarios}
                                                required
                                            />
                                          </div>
                                         <br />
                                         <br />
                                          {/* (formData.required) ?  */
                                          <div class="centrar col col-6">
                                             <button className="btn btn-outline-success w-50 mt-2">Ingresar Socio</button>
                                          </div>
                                          
                              
                                                                                     /*  : <p></p> */
                                          }
                                          <hr />
                                          <br />
                                          
                                    
                                          
                                      </div>
      </form>
      <br />
  </>
  
)
}

export default AltaSocio