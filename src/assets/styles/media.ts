import { css, type CSSObject, type Interpolation } from 'styled-components'

export type Breakpoints = 'desktop' | 'tablet'

export const breakpoints: Record<Breakpoints, string> = {
  tablet: '@media (min-width: 768px)', // 태블릿
  desktop: '@media (min-width: 1025px)', // 데스크톱
}

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  }
  // eslint-disable-next-line
}, {}) as Record<Breakpoints, any>

export default media
