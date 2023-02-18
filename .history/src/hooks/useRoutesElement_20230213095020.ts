import { useRoutes } from "react-router-dom";

export default function useRoutesElement(){
  const routes = useRoutes([
    {
      path:'/',
      element: <ProductList/>
    }
  ])
}