import { render, screen } from '@testing-library/react'
import App from './App'
import DefaultModalProvider from 'providers/DefaultModalProvider'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <DefaultModalProvider>
        <App />
      </DefaultModalProvider>
    </ThemeProvider>,
  )
  const linkElement = screen.getByText(/Project/i)
  expect(linkElement).toBeInTheDocument()
})
