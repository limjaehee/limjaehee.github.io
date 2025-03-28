import * as S from 'components/modal/ModalBackground,style'
import React, { forwardRef } from 'react'

interface ModalBackgroundProps {
  onClick?: () => void
  zIndex: number
  id?: string
}

const ModalBackground = forwardRef<HTMLDivElement, ModalBackgroundProps>(
  ({ onClick, zIndex, id }, ref) => {
    return (
      <S.ModalBackground
        onClick={onClick}
        $zIndex={zIndex}
        ref={ref} // forwardRef로 전달받은 ref
        id={id}
      />
    )
  },
)

export default ModalBackground
