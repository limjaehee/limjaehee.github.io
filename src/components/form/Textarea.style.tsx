import styled from 'styled-components'
import { fontStyles } from 'assets/styles/fontStyles'

interface TextareaLayoutProps {
  $isErrorMessageFloat: boolean
}

export const TextareaLayout = styled.div<TextareaLayoutProps>`
  position: relative;
  ${fontStyles.body1};

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

interface TextareaWrapProps {
  $isError: boolean
  $disabled: boolean
}

export const TextareaWrap = styled.div<TextareaWrapProps>`
  padding: 10px 16px;
  position: relative;
  background-color: ${props =>
    props.$disabled ? props.theme.colors.gray05 : 'white'};
  border: 1px solid
    ${props =>
      props.$isError ? props.theme.colors.danger : props.theme.colors.gray30};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: border 0.2s;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'text')};
  font-size: inherit;
  line-height: inherit;

  &:focus-within {
    border-color: ${props =>
      props.$isError ? props.theme.colors.danger : props.theme.colors.gray90};
  }

  > textarea {
    font-size: inherit;
    line-height: inherit;
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-weight: 500;
    padding: 2px 0 0 0;
    resize: none; /* 변경 불가능 */

    &::placeholder {
      color: ${props => props.theme.colors.gray40};
      font-weight: 400;
    }
  }
`
