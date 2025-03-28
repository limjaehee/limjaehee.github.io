import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from 'public/styles/theme'
import { GlobalStyle } from 'public/styles/styles'
import DefaultModalProvider from 'providers/DefaultModalProvider'
import GlobalFontStyle from 'public/fonts/fonts'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFontStyle />
    <DefaultModalProvider>
      <App />
    </DefaultModalProvider>
  </ThemeProvider>,
)
