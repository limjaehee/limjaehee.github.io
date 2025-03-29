import * as S from 'features/layout/Navigation.style'
import { HomeIcon, EmailIcon, UserIcon } from 'assets/icons/icon'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

export default function Navigation() {
  const theme = useTheme()

  const navActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? theme.colors.black : theme.colors.gray60,
  })

  return (
    <S.Navigation>
      <S.NavWrapper>
        <NavLink to="/" style={navActiveStyle}>
          <HomeIcon />
        </NavLink>
        <NavLink to="/contact" style={navActiveStyle}>
          <EmailIcon />
        </NavLink>
        <NavLink to="/sss" style={navActiveStyle}>
          <UserIcon />
        </NavLink>
      </S.NavWrapper>
    </S.Navigation>
  )
}
