import React, { useState, useEffect } from 'react'
import * as S from 'pages/home/page.style'
import CardModal from 'features/home/CardModal'
import { useModal } from 'contexts/DefaultModalContext'
import { CardValue } from 'constants/card'
import { CardListType, CardType, CardTypeKey } from 'types/cardType'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Layout from 'features/layout/Layout'

function Page() {
  const { openModal } = useModal()
  const [filter, setFilter] = useState<CardTypeKey | ''>('')
  const [cardList, setCardList] = useState<CardListType>([])

  const openCardModal = (item: CardType) => {
    openModal({
      id: 'editMemo',
      content: <CardModal id="editMemo" card={item} />,
      hasBackground: true,
    })
  }

  const handleFilter = (key: CardTypeKey | '') => {
    setFilter(key)
  }

  useEffect(() => {
    if (filter === '') {
      setCardList(CardValue)
    } else if (filter === 'front') {
      setCardList(CardValue.filter(item => item.type === 'front'))
    } else if (filter === 'publish') {
      setCardList(CardValue.filter(item => item.type === 'publish'))
    }
  }, [filter])

  return (
    <Layout>
      <S.Layout>
        <S.Title>Project</S.Title>
        <S.FilterBtns>
          <S.FilterBtn $active={filter === ''} onClick={() => handleFilter('')}>
            전체
          </S.FilterBtn>
          <S.FilterBtn
            $active={filter === 'front'}
            onClick={() => handleFilter('front')}
          >
            프론트
          </S.FilterBtn>
          <S.FilterBtn
            $active={filter === 'publish'}
            onClick={() => handleFilter('publish')}
          >
            퍼블리싱
          </S.FilterBtn>
        </S.FilterBtns>
        <S.Container>
          <TransitionGroup className="list">
            {cardList.map(item => (
              <CSSTransition
                key={item.title}
                timeout={200}
                classNames="custom-fade-slide"
                unmountOnExit
                data-board="board"
              >
                <S.Content
                  $height={item.height}
                  onClick={() => openCardModal(item)}
                >
                  <S.Card>
                    <S.CardImage>
                      <S.ImageBox $image={item.image} />
                    </S.CardImage>
                    <S.CardMessage>
                      <S.MessageTitle>{item.title}</S.MessageTitle>
                      <S.Tag>
                        {item.Tag.map(tag => (
                          <S.TagItem># {tag}</S.TagItem>
                        ))}
                      </S.Tag>
                    </S.CardMessage>
                  </S.Card>
                </S.Content>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </S.Container>
      </S.Layout>
    </Layout>
  )
}

export default Page
