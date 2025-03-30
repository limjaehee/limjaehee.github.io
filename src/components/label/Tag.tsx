import * as S from 'components/label/Tag.style'
import { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return <S.Tag># {children}</S.Tag>
}
