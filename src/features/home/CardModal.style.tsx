import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'
import { breakpoints } from 'assets/styles/media'
import { ChevronLeftIcon } from 'assets/icons/icon'
import Button from 'components/form/Button'
import { fontStyles } from '../../assets/styles/fontStyles'

export const Modal = styled.div`
  width: calc(100% - 2rem);
  height: 80dvh;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    width: calc(100% - 16rem);
    overflow: hidden;
    height: 80dvh;
    max-height: 1000px;
    max-width: 1400px;
  }
`

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
  width: 100%;
  display: flex;
  align-content: center;

  ${breakpoints.desktop} {
    position: absolute;
    width: 50%;
  }
`

export const BackIcon = styled(ChevronLeftIcon)`
  color: #fff;
  width: 36px;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 8px;
`

export const SliderContainer = styled.div`
  height: 400px;
  margin-top: -100px;

  .swiper {
    height: 100%;
  }

  ${breakpoints.desktop} {
    height: 100%;
    margin-top: 0;
  }

  .swiper-pagination {
    position: absolute;
    display: flex;
    width: 80%;
    bottom: 20px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;

    .swiper-pagination-bullet {
      width: 100%;
      height: 6px;
      background: #fff;

      &.swiper-pagination-bullet-active {
        background: ${props => props.theme.colors.red};
      }
    }
  }
`

export const Slider = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  background: #f9f9f9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardDetail = styled.article`
  padding: 30px 16px 50px 16px;
  height: 100%;
  overflow: initial;
  position: relative;

  ${breakpoints.desktop} {
    padding: 40px 30px 50px 40px;
    overflow: auto;
  }
`

export const CardLinkBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const VisitBtn = styled(Button)`
  ${fontStyles.body3}
  font-weight: 400;
  padding: 10px 14px 9px;
  border-radius: 30px;

  ${breakpoints.desktop} {
    ${fontStyles.body1}
    padding: 12px 14px 11px;
  }
`

export const Title = styled.h3`
  ${fontStyles.headline1}
  font-weight: 600;
  padding-top: 20px;

  ${breakpoints.desktop} {
    ${fontStyles.title3}
  }
`

export const Tag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 40px;
`

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 34px;
`
export const DetailItem = styled.li``

export const DetailItemTitle = styled.p`
  ${fontStyles.headline3}
  font-weight: 500;
  margin-bottom: 5px;
`

export const DetailItemArticle = styled.p`
  ${fontStyles.body3}
  white-space:pre-wrap;
`

export const OtherTitle = styled.h3`
  ${fontStyles.headline3}
  margin: 30px 0 10px;
`

export const OtherProjectList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 120px;
  gap: 10px;
`

export const OtherProject = styled.li`
  ${fontStyles.body3}
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.2s;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
