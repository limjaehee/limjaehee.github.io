import styled, { keyframes } from 'styled-components'
import { breakpoints } from 'assets/styles/media'
import { fontStyles } from 'assets/styles/fontStyles'

export const Layout = styled.div`
  padding: 50px ${props => props.theme.layout.mobileInner} 150px;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  min-height: 100dvh;
  gap: 40px;

  ${breakpoints.desktop} {
    padding: 0 ${props => props.theme.layout.desktopInner};
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeUp} 1 0.5s ease-out;
`

export const Form = styled.form`
  label {
    margin: 20px 0 10px;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const Title = styled.h1`
  ${fontStyles.title2};
  font-weight: 500;
  padding-bottom: 30px;

  ${breakpoints.desktop} {
    ${fontStyles.display2};
  }
`

export const Article = styled.p`
  ${fontStyles.body2};
  font-weight: 400;

  span {
    display: block;
    margin-top: 10px;
    color: ${props => props.theme.colors.gray60};
  }

  ${breakpoints.desktop} {
    ${fontStyles.body2};
  }
`

export const SendBtn = styled.input`
  ${fontStyles.body1};
  width: 100%;
  outline: none;
  height: 50px;
  margin-top: 20px;
  background: ${props => props.theme.colors.blue};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;

  &:disabled {
    background: ${props => props.theme.colors.gray30};
  }
`
