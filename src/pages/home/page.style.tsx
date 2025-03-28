import styled, { keyframes } from 'styled-components'
import { breakpoints } from 'assets/styles/media'
import { fontStyles } from 'assets/styles/fontStyles'

export const Layout = styled.div`
  padding: 0 ${props => props.theme.layout.mobileInner};

  ${breakpoints.desktop} {
    padding: 0 ${props => props.theme.layout.desktopInner};
  }
`

export const Title = styled.h1`
  ${fontStyles.display2};
  font-weight: 500;
  padding: 5dvh 0 30px;

  ${breakpoints.desktop} {
    padding-bottom: 40px;
  }
`

export const Container = styled.ul`
  width: 100%;
  padding-bottom: 15vh;
  column-width: 500px;
  column-gap: 30px;

  ${breakpoints.desktop} {
    column-width: 350px;
  }
`

const cardUp = keyframes`
  0% {
      transform: translateY(30px);
  }
  50% {
    opacity: 0;
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`

interface StyledContent {
  $height: number
}

export const Content = styled.li<StyledContent>`
  display: inline-block;
  margin: 0 0 30px 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  animation: ${cardUp} 1 1s forwards;
  opacity: 0;
  height: ${props => `${props.$height}dvh`};
`

export const CardImage = styled.div`
  transition: 0.5s;
  flex: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export const Card = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);

    ${CardImage} {
      flex: initial;
    }
  }

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
  }
`

interface StyledImageBox {
  $image: string
}

export const ImageBox = styled.div<StyledImageBox>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #aaa;
  transition: 0.5s;
  flex: none;
  background-image: ${props => `url(${props.$image})`};

  ${breakpoints.desktop} {
    flex: inherit;
  }
`

export const CardMessage = styled.figcaption`
  justify-content: space-between;
  padding: 6px 10px 0;
  background: hsla(0, 0%, 100%, 0.2);
  backdrop-filter: blur(8px);
  position: absolute;
  bottom: 0;
  width: 100%;

  ${breakpoints.desktop} {
    position: relative;
    width: unset;
  }
`

export const MessageTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  transition: 0.5s;
  padding-bottom: 10px;
`

export const Tag = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagItem = styled.li`
  border-radius: 6px;
  color: #333;
  margin-right: 8px;
  font-size: 0.875rem;
  margin-bottom: 10px;
  display: none;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    display: block;
  }

  &::after {
    content: '...';
    display: inline-block;
    align-self: center;
    color: #999;
    margin-bottom: 4px;
    @include font-size(20px);
  }

  ${breakpoints.desktop} {
    padding: 4px 16px;
    background: #efefef;
    display: block;

    &::after {
      content: none;
    }
  }
`
