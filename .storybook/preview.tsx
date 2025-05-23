import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
