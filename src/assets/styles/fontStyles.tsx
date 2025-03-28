import { css } from 'styled-components'

export const fontStyles = {
  display1: css`
    font-size: ${({ theme }) => theme.fonts.display1.fontSize};
    line-height: ${({ theme }) => theme.fonts.display1.lineHeight};
  `,
  display2: css`
    font-size: ${({ theme }) => theme.fonts.display2.fontSize};
    line-height: ${({ theme }) => theme.fonts.display2.lineHeight};
  `,
  title1: css`
    font-size: ${({ theme }) => theme.fonts.title1.fontSize};
    line-height: ${({ theme }) => theme.fonts.title1.lineHeight};
  `,
  title2: css`
    font-size: ${({ theme }) => theme.fonts.title2.fontSize};
    line-height: ${({ theme }) => theme.fonts.title2.lineHeight};
  `,
  title3: css`
    font-size: ${({ theme }) => theme.fonts.title3.fontSize};
    line-height: ${({ theme }) => theme.fonts.title3.lineHeight};
  `,
  headline1: css`
    font-size: ${({ theme }) => theme.fonts.headline1.fontSize};
    line-height: ${({ theme }) => theme.fonts.headline1.lineHeight};
  `,
  headline2: css`
    font-size: ${({ theme }) => theme.fonts.headline2.fontSize};
    line-height: ${({ theme }) => theme.fonts.headline2.lineHeight};
  `,
  headline3: css`
    font-size: ${({ theme }) => theme.fonts.headline3.fontSize};
    line-height: ${({ theme }) => theme.fonts.headline3.lineHeight};
  `,
  body1: css`
    font-size: ${({ theme }) => theme.fonts.body1.fontSize};
    line-height: ${({ theme }) => theme.fonts.body1.lineHeight};
  `,
  body2: css`
    font-size: ${({ theme }) => theme.fonts.body2.fontSize};
    line-height: ${({ theme }) => theme.fonts.body2.lineHeight};
  `,
  body3: css`
    font-size: ${({ theme }) => theme.fonts.body3.fontSize};
    line-height: ${({ theme }) => theme.fonts.body3.lineHeight};
  `,
  label1: css`
    font-size: ${({ theme }) => theme.fonts.label1.fontSize};
    line-height: ${({ theme }) => theme.fonts.label1.lineHeight};
  `,
  label2: css`
    font-size: ${({ theme }) => theme.fonts.label2.fontSize};
    line-height: ${({ theme }) => theme.fonts.label2.lineHeight};
  `,
  caption1: css`
    font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
    line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  `,
}
