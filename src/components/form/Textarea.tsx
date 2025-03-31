import React, { useRef } from 'react'
import * as S from 'components/form/Textarea.style'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string // 에러 메시지
  isError?: boolean // 에러 스타일
  isErrorMessageFloat?: boolean // 에러 메시지 포지션 absolute 여부
  children?: React.ReactNode
}

export default function Textarea({
  errorMessage,
  isError,
  isErrorMessageFloat,
  children,
  ...props
}: TextareaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleClick = () => {
    if (inputRef.current && !props.disabled) {
      inputRef.current.focus()
    }
  }

  return (
    <S.TextareaLayout $isErrorMessageFloat={!!isErrorMessageFloat}>
      <S.TextareaWrap
        onClick={handleClick}
        $isError={!!isError}
        $disabled={!!props.disabled}
      >
        <textarea ref={inputRef} {...props} />
        {children}
      </S.TextareaWrap>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </S.TextareaLayout>
  )
}
