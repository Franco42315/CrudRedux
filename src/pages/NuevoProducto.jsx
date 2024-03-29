import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';


// Actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions"
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaAction";

export const NuevoProducto = () => {
  // State del componente
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0)

  // Obtiene la navegación
  const navigate = useNavigate();

  // Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);

  const alerta = useSelector(state => state.alerta.alerta);

  // Mandar llamar el action de productoActions
  const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) )

  // cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();

    //Validar formulario
    if(nombre.trim() === '' || precio <=0){

      const alerta = {
        msg: 'Ambos campos son obligatorios',
        clases: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch(mostrarAlerta(alerta))
      return;
    }
    // Si no hay errores
    dispatch(ocultarAlerta())
    // Crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    });

    // redireccionar
    navigate('/');
  }

  ///////////////////////////////////////////////////////////////////
  return (
    <div className="row justify-content-center ">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            {alerta ? <p className={alerta.clases}>{alerta.msg}</p>: null}

            <form
              onSubmit={submitNuevoProducto}
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
                  onChange={e => setNombre(e.target.value)} />

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
                  onChange={e => setPrecio(Number(e.target.value))}/>
              </div>
              <button 
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                  Agregar
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className="alert alert-danger p2 mt-2 text-center">Hubo un error</p> : null}
          </div>
        </div>
      </div>

    </div>
  )
}
