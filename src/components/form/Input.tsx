import React, { useRef, useState } from 'react'
import * as S from 'components/form/Input.style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isHideBtn?: boolean
  errorMessage?: string // 에러 메시지
  isError?: boolean // 에러 스타일
  isErrorMessageFloat?: boolean // 에러 메시지 포지션 absolute 여부
  isSmall?: boolean
}

export default function Input({
  isHideBtn,
  errorMessage,
  isError,
  isErrorMessageFloat,
  isSmall,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputType, setInputType] = useState(props.type || 'text')

  const handleClick = () => {
    if (inputRef.current && !props.disabled) {
      inputRef.current.focus()
    }
  }

  return (
    <S.InputLayout $isErrorMessageFloat={!!isErrorMessageFloat}>
      <S.InputWrap
        onClick={handleClick}
        $isError={!!isError}
        $disabled={!!props.disabled}
        $isSmall={isSmall || false}
      >
        <input ref={inputRef} {...props} type={inputType} />
      </S.InputWrap>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </S.InputLayout>
  )
}
