import React, { useState } from 'react'
import { useModal } from 'contexts/DefaultModalContext'
import * as S from 'features/home/CardModal.style'
import useClickOutside from 'hooks/useOutsideModal'
import { CardListType, CardType } from 'types/cardType'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { CardValue } from 'constants/card'
import Tag from 'components/label/Tag'

interface CardModalProps {
  id: string
  card: CardType
}

SwiperCore.use([Pagination])

export default function CardModal({ id, card }: CardModalProps) {
  const { closeModal } = useModal()
  const [cardData, setCardData] = useState<CardType>(card)

  const onClose = () => {
    closeModal(id)
  }

  useClickOutside(onClose, id)

  const getOtherProject = () => {
    if (!cardData) return []
    const index = CardValue.findIndex(item => item.title === cardData.title)

    if (index === -1) return []

    const result: CardListType = []

    for (let i = 1; i <= 3; i += 1) {
      result.push(CardValue[(index + i) % CardValue.length])
    }

    return result
  }

  const visitSite = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <S.Modal>
      <S.ModalHeader>
        <S.BackIcon onClick={onClose} />
      </S.ModalHeader>
      <S.SliderContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
        >
          {cardData.SubImage?.map(item => (
            <SwiperSlide key={`${item}`} style={{ height: '100%' }}>
              <S.Slider>
                <a
                  href={item}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="picture"
                >
                  <img src={item} alt="" />
                </a>
              </S.Slider>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SliderContainer>
      <S.CardDetail>
        <S.CardLinkBtn>
          {cardData.link && (
            <S.VisitBtn color="red" onClick={() => visitSite(cardData.link)}>
              방문하기
            </S.VisitBtn>
          )}
        </S.CardLinkBtn>
        <S.Title>{cardData.title}</S.Title>
        <S.Tag>
          {cardData.Tag.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </S.Tag>
        <S.DetailList>
          {cardData.CardDetail.map(detail => (
            <S.DetailItem>
              <S.DetailItemTitle>{detail.title}</S.DetailItemTitle>
              <S.DetailItemArticle>{detail.text}</S.DetailItemArticle>
            </S.DetailItem>
          ))}
        </S.DetailList>
        <S.OtherTitle>다른 프로젝트 보기</S.OtherTitle>
        <S.OtherProjectList>
          {getOtherProject().map(item => (
            <S.OtherProject onClick={() => setCardData(item)} key={item.title}>
              <img src={item.image} alt="" />
            </S.OtherProject>
          ))}
        </S.OtherProjectList>
      </S.CardDetail>
    </S.Modal>
  )
}
