import { useState, useCallback, useRef } from 'react'
import {
  ToastDuration,
  ToastMessage,
  ToastStatus,
  ToastText,
} from 'types/toast'

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])
  const toastId = useRef(0)

  const addToast = useCallback(
    (text: ToastText, type: ToastStatus, duration: ToastDuration = 3000) => {
      const id = toastId.current // 현재 toastId 값 사용
      toastId.current += 1 // 다음 토스트에 대해 ID 증가

      // 기존 토스트를 제거하고 새 토스트 추가
      setToasts([{ id, text, type }])

      // 토스트 쌓임
      // setToasts(prevToasts => [...prevToasts, { id, text, type }])

      setTimeout(() => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
      }, duration)
    },
    [toastId],
  )

  return { toasts, addToast }
}
