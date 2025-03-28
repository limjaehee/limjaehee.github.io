import { createContext, useContext } from 'react'
import { DefaultModal } from 'types/defaultModal'

interface ModalContextType {
  modals: DefaultModal[]
  openModal: (modal: Omit<DefaultModal, 'zIndex'>) => void
  closeModal: (modalId: string) => void
  closeModalAll: () => void
}

const DefaultModalContext = createContext<ModalContextType | undefined>(
  undefined,
)

export const useModal = (): ModalContextType => {
  const context = useContext(DefaultModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export default DefaultModalContext
