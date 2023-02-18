import { useRoutes } from "react-router-dom";
import ProductList from "src/pages/ProductList";



export default function useRoutesElement(){
  const routes = useRoutes([
    {
      path:'/',
      element: <ProductList/>
    }
  ])

  return routes;
}