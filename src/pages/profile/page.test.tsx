import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import MainPage from './page'
import { theme } from '../../assets/styles/theme'
import DefaultModalProvider from '../../providers/DefaultModalProvider'
import { ToastProvider } from '../../providers/ToastProvider'

test('페이지의 내용이 보임', () => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <DefaultModalProvider>
          <ToastProvider>
            <MainPage />
          </ToastProvider>
        </DefaultModalProvider>
      </ThemeProvider>
    </MemoryRouter>,
  )

  const text = screen.getByText(/안녕하세요/i)
  expect(text).toBeInTheDocument()
})
