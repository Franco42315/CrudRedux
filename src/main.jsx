import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/index.jsx'
import { Layout } from './components/Layout.jsx'
import { Productos } from './pages/Productos.jsx'
import { NuevoProducto } from './pages/NuevoProducto.jsx'
import { EditarProducto } from './pages/EditarProducto.jsx'

// Redux
import { Provider } from 'react-redux'
import store from './store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index:true,
        element:<Index />,
      },
      {
        path: '/productos',
        element: <div className="container mt-5"><Productos /></div>,
      },
      {
        path: '/productos/nuevo',
        element: <div className="container mt-5"><NuevoProducto /></div>,
      },
      {
        path: '/productos/editar/:id',
        element: <div className="container mt-5"><EditarProducto /></div>,
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
