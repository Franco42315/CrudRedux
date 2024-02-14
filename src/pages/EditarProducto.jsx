import { useDispatch, useSelector } from "react-redux"
import {editarProductoAction} from '../actions/productoActions.js'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EditarProducto = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // nuevo state de producto
  const [producto, setProducto] = useState({
    nombre:'',
    precio: ''
  })

  // Producto a editar
  const productoEditar = useSelector(state => state.productos.productoeditar)
  
  // llenar el state automaticamente
  useEffect(() => {
   setProducto(productoEditar)
  }, [productoEditar])
  
  // leer los datos del formulario
  const onChangeFormulario = e => {
    setProducto({
      ...producto,
      [e.target.name] : e.target.value
    })
  }


  const {nombre, precio} = producto


  const submitEditarProducto = e => {
    e.preventDefault()

    dispatch(editarProductoAction(producto))

    navigate('/')
    
  }

  return (
    <div className="row justify-content-center ">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            Editar Producto
          </h2>

          <form
            onSubmit={submitEditarProducto}
          >
            <div className="form-group">
              <label 
                htmlFor="nombre">Nombre Producto: 
              </label>
              <input
                className="form-control" 
                type="text" 
                name="nombre" 
                id="nombre" 
                placeholder="Nombre Producto"
                value={nombre} 
                onChange={onChangeFormulario}/>

                <label 
                htmlFor="precio">Precio Producto: 
              </label>
              <input
                className="form-control" 
                type="number" 
                name="precio" 
                id="precio" 
                placeholder="Precio Producto"
                value={precio}
                onChange={onChangeFormulario} />
            </div>
            <button 
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
  )
}
