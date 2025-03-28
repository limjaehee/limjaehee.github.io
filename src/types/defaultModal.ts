import { ReactNode } from 'react'

export interface DefaultModal {
  id: string
  content: ReactNode
  zIndex: number
  hasBackground?: boolean
  isClosing?: boolean
}
