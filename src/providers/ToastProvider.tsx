import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from 'react'
import { useToast } from 'hooks/useToast'
import * as T from 'providers/ToastProvider.style'
import { ToastDuration, ToastStatus, ToastText } from 'types/toast'

interface ToastContextProps {
  addToast: (
    text: ToastText,
    type: ToastStatus,
    duration?: ToastDuration,
  ) => void
}

// 컴포넌트 외부에서 사용
let addToastGlobal: (
  text: ToastText,
  type: ToastStatus,
  duration?: ToastDuration,
) => void

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined,
)

// 컴포넌트 내부에서 사용
export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('토스트 기능을 사용할 수 없습니다.')
  }
  return context
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const { toasts, addToast } = useToast()

  // 전역 변수에 한 번만 할당
  useEffect(() => {
    if (!addToastGlobal) {
      addToastGlobal = addToast
    }
  }, [addToast])

  // value 객체를 useMemo로 캐싱하여 매 렌더링마다 동일한 참조를 유지
  const value = useMemo(() => ({ addToast }), [addToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <T.ToastContainer>
        {toasts.map(toast => (
          <T.ToastProviderStyle key={toast.id} $type={toast.type}>
            {toast.text}
          </T.ToastProviderStyle>
        ))}
      </T.ToastContainer>
    </ToastContext.Provider>
  )
}

// 외부에서 사용할 수 있는 전역 addToast 함수
export const addToastMessage = (
  message: string,
  type: ToastStatus = 'default',
  duration = 3000,
) => {
  if (addToastGlobal) {
    addToastGlobal(message, type, duration)
  }
}
