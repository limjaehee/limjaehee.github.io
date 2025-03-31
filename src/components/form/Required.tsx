import styled from 'styled-components'

export const Required = styled.span`
  display: flex;
  gap: 3px;

  &::after {
    content: '*';
    display: inline-block;
    border-radius: 100%;
    color: ${props => props.theme.colors.danger};
    margin-bottom: auto;
  }
`
