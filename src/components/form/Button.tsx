import React from 'react'
import * as S from 'components/form/Button.style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: S.ButtonColor
}

export default function Button({
  children,
  color,
  onClick,
  ...props
}: ButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    // 기본 동작을 방지
    event.preventDefault()
    // 전달된 onClick 이벤트 실행
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <S.ButtonStyle
      type="button"
      {...props}
      $color={color}
      onClick={handleClick} // 수정된 handleClick 전달
    >
      {children}
    </S.ButtonStyle>
  )
}
