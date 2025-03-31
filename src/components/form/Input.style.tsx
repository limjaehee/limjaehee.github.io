import styled from 'styled-components'
import { fontStyles } from 'assets/styles/fontStyles'

interface InputLayoutProps {
  $isErrorMessageFloat: boolean
}

export const InputLayout = styled.div<InputLayoutProps>`
  position: relative;

  .error-message {
    color: ${props => props.theme.colors.danger};
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    position: ${props =>
      props.$isErrorMessageFloat ? 'absolute' : 'relative'};
    bottom: ${props => (props.$isErrorMessageFloat ? '-28px' : 0)};
  }
`

interface InputWrapProps {
  $isError: boolean
  $disabled: boolean
  $isSmall: boolean
}

export const InputWrap = styled.div<InputWrapProps>`
  padding: ${props => (props.$isSmall ? '7px 12px' : '13px 16px;')};
  height: ${props => (props.$isSmall ? '32px' : '48px')};
  position: relative;
  background-color: ${props =>
    props.$disabled ? props.theme.colors.gray10 : 'white'};
  border: 1px solid
    ${props => {
      if (props.$disabled) {
        return props.theme.colors.gray10
      }
      if (props.$isError) {
        return props.theme.colors.danger
      }
      return props.theme.colors.gray30
    }};
  border-radius: 6px;
  display: flex;
  transition: border 0.2s;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'text')};
  color: ${props =>
    props.$disabled ? props.theme.colors.gray50 : props.theme.colors.gray90};

  &:focus-within {
    border-color: ${props =>
      props.$isError ? props.theme.colors.danger : props.theme.colors.gray90};
  }

  > input {
    ${props => (props.$isSmall ? fontStyles.label1 : fontStyles.body1)}
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    padding: 2px 0 0 0;
    color: inherit;
    cursor: inherit;

    &::placeholder {
      color: ${props => props.theme.colors.gray40};
      font-weight: 400;
    }
  }

  .hide-icon {
    flex: 0 0 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.gray40};
  }
`
