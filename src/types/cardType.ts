export type CardTypeKey = 'front' | 'publish'

export interface CardType {
  title: string
  image: string
  height: number
  SubImage: string[]
  github: string
  link: string
  Tag: string[]
  CardDetail: {
    title: string
    text: string
  }[]
  type: CardTypeKey
}

export type CardListType = CardType[]
