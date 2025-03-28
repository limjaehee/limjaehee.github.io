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
}

export type CardListType = CardType[]
