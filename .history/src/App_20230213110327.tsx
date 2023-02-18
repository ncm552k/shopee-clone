import React from 'react'
import useRoutesElement from './hooks/useRoutesElement'

const App = () => {
  const routesElement = useRoutesElement()

  return <div>{routesElement}</div>
}

export default App
