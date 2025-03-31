import styled, { keyframes, css } from 'styled-components'
import { breakpoints } from 'assets/styles/media'
import { fontStyles } from 'assets/styles/fontStyles'
import { QuotesEndIcon, QuotesStartIcon } from 'assets/icons/icon'

export const Layout = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding: 0 ${props => props.theme.layout.mobileInner} 150px;
  margin: 60px ${props => props.theme.layout.mobileInner} 0;

  &::before {
    content: '';
    width: 100%;
    background: ${props => props.theme.colors.gray05};
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 40px;
    z-index: -1;
    border-radius: 20px 20px 0 0;
  }

  ${breakpoints.desktop} {
    margin: 110px ${props => props.theme.layout.desktopInner} 0;
    padding-bottom: 250px;

    &::before {
      top: 60px;
    }
  }
`

export const ProfilePicture = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${breakpoints.desktop} {
    width: 130px;
    height: 130px;
  }
`

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

interface StyledProfileTitle {
  $isAnimation: boolean
}

export const ProfileTitle = styled.h2<StyledProfileTitle>`
  font-weight: 300;
  padding: 0 0 18px;
  ${fontStyles.headline3};
  ${props =>
    props.$isAnimation &&
    css`
      animation: ${fadeLeft} 1 0.5s ease-out;
    `}

  strong {
    font-weight: 600;
  }

  ${breakpoints.desktop} {
    ${fontStyles.headline1};
  }
`

interface StyledProfileComment {
  $isAnimation: boolean
}

export const ProfileComment = styled.p<StyledProfileComment>`
  color: ${props => props.theme.colors.gray60};
  font-weight: 200;
  ${fontStyles.body3};
  ${props =>
    props.$isAnimation &&
    css`
      animation: ${fadeRight} 1 0.5s ease-out;
    `}

  br {
    display: none;
  }
  br.is-mobile {
    display: block;
  }

  strong {
    font-weight: 600;
  }

  ${breakpoints.desktop} {
    ${fontStyles.body1};

    br.is-mobile {
      display: none;
    }
    br.is-desktop {
      display: block;
    }
  }
`

export const ProfileBox = styled.div`
  margin-top: 50px;
  position: relative;

  ${breakpoints.desktop} {
    margin-top: 70px;
  }
`

export const ProfileIconQuotesStart = styled(QuotesStartIcon)`
  position: absolute;
  left: -6px;
  top: -40px;
  color: rgba(0, 0, 0, 0.07);
  width: 50px;

  ${breakpoints.desktop} {
    left: -60px;
    top: -20px;
    width: 60px;
  }
`

export const ProfileIconQuotesEnd = styled(QuotesEndIcon)`
  position: absolute;
  right: -6px;
  bottom: unset;
  top: -30px;
  color: rgba(0, 0, 0, 0.07);
  width: 50px;

  ${breakpoints.desktop} {
    right: -60px;
    bottom: -20px;
    width: 60px;
    top: unset;
  }
`

export const ProfileStudy = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  gap: 16px;

  ${breakpoints.desktop} {
    gap: 20px;
  }
`

export const ProfileStudyBtn = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.gray50};
  border-radius: 100%;
  transition: 0.2s;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
  }

  &:hover {
    background: ${props => props.theme.colors.gray70};
  }

  ${breakpoints.desktop} {
    width: 60px;
    height: 60px;
  }
`

export const ProfileSkill = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
`

export const ProfileCareer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`

export const ProfileCareerItem = styled.div`
  ${fontStyles.body2};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
  }

  em {
    font-weight: 300;
    font-style: unset;
    align-items: center;
    justify-content: center;
    display: flex;

    &::after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 16px;
      background: #1b1d20;
      vertical-align: middle;
      margin: 0 10px;
    }

    &:last-child::after {
      display: none;
    }
  }

  ${breakpoints.desktop} {
    ${fontStyles.body1};
    flex-direction: row;

    em {
      &::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 16px;
        background: #1b1d20;
        vertical-align: middle;
        margin: 0 10px;
      }

      &:last-child::after {
        display: block;
      }
    }
  }
`
