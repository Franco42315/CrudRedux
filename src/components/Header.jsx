import {Link} from 'react-router-dom'


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'} 
          className='text-light'
            >CRUD - REACT - REDUX - REST API & AXIOS
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        to={'/productos/nuevo'}>Agregar Producto &#43;</Link>
    </nav>
  )
}
