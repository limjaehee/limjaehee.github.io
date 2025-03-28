import { useEffect, useCallback } from 'react'

/**
 * 특정 요소 외부를 클릭했을 때 모달을 닫는 커스텀 훅
 *
 * @param closeModal - 모달을 닫는 함수, 모달 ID를 인자로 받음
 * @param modalId - 닫을 모달의 고유 ID
 */
function useClickOutside(closeModal: (id: string) => void, modalId: string) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement

      if (clickedElement.id === modalId) {
        closeModal(modalId)
      }
    },
    [closeModal, modalId],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return handleClickOutside
}

export default useClickOutside
