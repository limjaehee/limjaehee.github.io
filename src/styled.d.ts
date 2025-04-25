import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('./assets/styles/theme').COLORS
    fonts: typeof import('./assets/styles/theme').FONT
    layout: typeof import('./assets/styles/theme').LAYOUT
  }
}
