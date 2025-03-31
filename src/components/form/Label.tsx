import React from 'react'
import * as S from 'components/form/Label.style'
import { Required } from 'components/form/Required'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  children: React.ReactNode
  isRequired?: boolean // * 표시
}

export default function Label({
  htmlFor,
  children,
  isRequired,
  ...props
}: LabelProps) {
  return (
    <S.LabelStyle {...props} htmlFor={htmlFor}>
      {children}
      {isRequired && <Required />}
    </S.LabelStyle>
  )
}
