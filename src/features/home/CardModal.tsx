import React, { useEffect, useState } from 'react'
import { useModal } from 'contexts/DefaultModalContext'
import * as S from 'features/home/CardModal.style'
import useClickOutside from 'hooks/useOutsideModal'
import { CardListType, CardType } from 'types/cardType'
import { Swiper } from 'swiper/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper as SwiperInstance } from 'swiper'
import { Pagination } from 'swiper/modules'
import { CardValue } from 'constants/card'

interface CardModalProps {
  id: string
  card: CardType
}

export default function CardModal({ id, card }: CardModalProps) {
  const { closeModal } = useModal()
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [isLocked, setIsLocked] = useState(false) // 스와이프 잠김 상태
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [cardData, setCardData] = useState<CardType>(card)

  const onClose = () => {
    closeModal(id)
  }

  useClickOutside(onClose, id)

  // Swiper 초기화 및 상태 업데이트
  const handleSwiperInit = (instance: SwiperInstance) => {
    setSwiper(instance)
    setIsLocked(instance.isLocked) // 스와이프 상태 저장
  }

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
          modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={0}
          onSwiper={handleSwiperInit}
          onSlideChange={(instance: SwiperInstance) => {
            setIsBeginning(instance.activeIndex === 0)
            setIsEnd(instance.isEnd)
          }}
          onReachEnd={() => {
            setIsEnd(true)
          }}
          pagination={{ clickable: true }}
        >
          {cardData.SubImage?.map(item => (
            <S.Slider key={`${item}`}>
              <a
                href={item}
                target="_blank"
                rel="noreferrer"
                aria-label="picture"
              >
                <img src={item} alt="" />
              </a>
            </S.Slider>
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
            <S.TagItem># {tag}</S.TagItem>
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
