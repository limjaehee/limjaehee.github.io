import styled from 'styled-components'
import { zIndex } from 'assets/styles/zIndex'
import { breakpoints } from 'assets/styles/media'

export const Navigation = styled.nav`
  position: fixed;
  bottom: 20px;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: ${zIndex.base + 800};
  max-width: fit-content;

  ${breakpoints.desktop} {
    bottom: 40px;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
  gap: 30px;

  svg {
    width: 24px;
    height: 24px;
  }

  ${breakpoints.desktop} {
    padding: 15px 40px;
    gap: 40px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`
