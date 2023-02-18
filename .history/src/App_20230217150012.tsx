import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRoutesElement from './hooks/useRoutesElement'

const App = () => {
  const routesElement = useRoutesElement()

  return (
    <div>
      {routesElement}
      <ToastContainer />
    </div>
  )
}

export default App
