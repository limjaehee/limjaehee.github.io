import React from 'react'
import AppRouter from 'routes/AppRouter'
import DefaultModalRenderer from 'components/modal/DefaultModalRenderer'
import { ToastProvider } from 'providers/ToastProvider'

function App() {
  return (
    <ToastProvider>
      <AppRouter />
      <DefaultModalRenderer />
      <div id="root-portal" />
    </ToastProvider>
  )
}

export default App
