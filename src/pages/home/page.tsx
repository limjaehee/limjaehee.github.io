import React from 'react'
import * as S from 'pages/home/page.style'
import CardModal from 'features/home/CardModal'
import { useModal } from 'contexts/DefaultModalContext'
import { CardValue } from 'constants/card'
import { CardType } from 'types/cardType'

function Page() {
  const { openModal } = useModal()

  const openCardModal = (item: CardType) => {
    openModal({
      id: 'editMemo',
      content: <CardModal id="editMemo" card={item} />,
      hasBackground: true,
    })
  }

  return (
    <S.Layout>
      <S.Title>Project</S.Title>
      <S.Container>
        {CardValue.map(item => (
          <S.Content $height={item.height} onClick={() => openCardModal(item)}>
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
        ))}
      </S.Container>
    </S.Layout>
  )
}

export default Page
