import React from 'react'
import AppRouter from 'routes/AppRouter'
import DefaultModalRenderer from 'components/modal/DefaultModalRenderer'

function App() {
  return (
    <>
      <AppRouter />
      <DefaultModalRenderer />
      <div id="root-portal" />
    </>
  )
}

export default App
