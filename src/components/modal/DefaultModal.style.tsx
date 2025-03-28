import styled from 'styled-components'

interface ModalProps {
  $zIndex: number
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  z-index: ${props => props.$zIndex};
`
