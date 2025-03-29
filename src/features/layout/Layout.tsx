import { ReactNode } from 'react'
import Navigation from 'features/layout/Navigation'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  )
}
