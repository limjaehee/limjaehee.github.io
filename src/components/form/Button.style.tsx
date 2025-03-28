import styled from 'styled-components'
import { breakpoints } from 'assets/styles/media'

export type ButtonColor = 'black' | 'blue' | 'default' | 'red'

interface ButtonStyleProps {
  $color: ButtonColor
}

// 색상 스타일을 함수로 만들어 props를 동적으로 처리
// eslint-disable-next-line
const getColorStyles = (color: ButtonColor, theme: any) => {
  switch (color) {
    case 'black':
      return {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black',
        hoverBackgroundColor: theme.colors.gray80,
        activeBackgroundColor: theme.colors.gray90,
      }
    case 'red':
      return {
        backgroundColor: theme.colors.red,
        color: 'white',
        borderColor: theme.colors.red,
        hoverBackgroundColor: theme.colors.darkRed,
        activeBackgroundColor: theme.colors.darkRed,
      }
    case 'blue':
      return {
        backgroundColor: theme.colors.blue,
        color: 'white',
        borderColor: theme.colors.blue,
        hoverBackgroundColor: theme.colors.darkBlue,
        activeBackgroundColor: theme.colors.darkBlue,
      }
    default:
      return {
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        activeBackgroundColor: theme.colors.gray10,
      }
  }
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  transition: background-color 0.3s;
  ${({ $color, theme }) => {
    const styles = getColorStyles($color, theme)

    return `
      background-color: ${styles.backgroundColor};
      color: ${styles.color};
      border: 1px solid ${styles.borderColor};
      
      ${breakpoints.desktop} {
        &:hover {
          background-color: ${styles.hoverBackgroundColor};
        }
      }
      
      &:active {
        background-color: ${styles.activeBackgroundColor};
      }

      &:disabled {
       background: ${theme.colors.gray10};
       border-color: ${theme.colors.gray10};
       color: ${theme.colors.gray40};
       cursor: not-allowed;
      }
    `
  }}
`
