import React, {
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import DefaultModalContext from 'contexts/DefaultModalContext'
import { zIndex } from 'assets/styles/zIndex'
import useCustomLocation from 'hooks/useCustomLocation'
import { DefaultModal } from 'types/defaultModal'

interface ModalProviderProps {
  children: ReactNode
}

export default function DefaultModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<DefaultModal[]>([])
  const currentPath = useCustomLocation()

  const openModal = useCallback((modal: Omit<DefaultModal, 'zIndex'>) => {
    setModals(prevModals => {
      const existingModalIndex = prevModals.findIndex(m => m.id === modal.id)

      if (existingModalIndex !== -1) {
        // Update existing modal
        const updatedModals = [...prevModals]
        updatedModals[existingModalIndex] = {
          ...updatedModals[existingModalIndex],
          content: modal.content,
          hasBackground: modal.hasBackground ?? true,
        }
        return updatedModals
      }

      // Add new modal
      const zIndexCounter = zIndex.modal + (prevModals.length || 0)

      const newModal = {
        ...modal,
        zIndex: zIndexCounter,
        hasBackground: modal.hasBackground ?? true,
      }
      return [...prevModals, newModal]
    })
  }, [])

  const closeModal = useCallback((modalId: string) => {
    setModals(prevModals =>
      prevModals.map(modal =>
        modal.id === modalId ? { ...modal, isClosing: true } : modal,
      ),
    )

    setModals(prevModals => prevModals.filter(modal => modal.id !== modalId))
  }, [])

  const closeModalAll = useCallback(() => {
    setModals([])
  }, [])

  const value = useMemo(
    () => ({ modals, openModal, closeModal, closeModalAll }),
    [modals, openModal, closeModal, closeModalAll],
  )

  useEffect(() => {
    closeModalAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath])

  return (
    <DefaultModalContext.Provider value={value}>
      {children}
    </DefaultModalContext.Provider>
  )
}
