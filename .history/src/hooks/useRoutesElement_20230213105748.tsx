import { useRoutes } from 'react-router-dom'
import RegisterLayout from 'src/layouts/RegisterLayout'
import Login from 'src/pages/Login'
import ProductList from 'src/pages/ProductList'
import Register from 'src/pages/Register'

export default function useRoutesElement() {
  const routes = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path:'/login',
      element:(<RegisterLayout><Login/><RegisterLayout/>)
    }
  ])

  return routes
}
