import styled from 'styled-components'
import { ToastStatus } from 'types/toast'
import { zIndex } from 'assets/styles/zIndex'
import { theme } from 'assets/styles/theme'
import { fontStyles } from 'assets/styles/fontStyles'

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: ${zIndex.notification};
  width: fit-content;
`

interface ToastProviderProps {
  $type: ToastStatus
}

const ToastStyles = {
  default: {
    backgroundColor: theme.colors.gray90,
    color: 'white',
  },
  success: {
    backgroundColor: theme.colors.positive,
    color: 'white',
  },
  error: {
    backgroundColor: theme.colors.danger,
    color: 'white',
  },
}

export const ToastProviderStyle = styled.div<ToastProviderProps>`
  ${fontStyles.body1};
  padding: 12px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  animation:
    fadeInOut 0.4s ease-in-out,
    disappear 2s ease-in forwards;
  background-color: ${props => ToastStyles[props.$type].backgroundColor};
  color: ${props => ToastStyles[props.$type].color};
  width: fit-content;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const ToastProviderIcon = styled.div`
  width: 20px;
  height: 20px;
`
