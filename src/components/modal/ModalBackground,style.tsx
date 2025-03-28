import styled from 'styled-components'

interface ModalBgProps {
  $zIndex: number
}

export const ModalBackground = styled.div<ModalBgProps>`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: ${props => props.$zIndex};
  background: rgba(0, 0, 0, 0.7);
`
