import CardModalities, { CardModalitiesProps } from 'components/CardModalities'

import * as S from './styles'

export type CardsModalitiesProps = {
  cards: CardModalitiesProps[]
}

const CardsModalities = ({ cards }: CardsModalitiesProps) => (
  <S.Wrapper>
    <S.Cards>
      {!!cards &&
        cards.map(
          (
            { tone, icon, title, subtitle, text, buttonLink, buttonText },
            index
          ) => (
            <S.Card key={'CardsModalities' + index}>
              <CardModalities
                tone={tone}
                icon={icon}
                title={title}
                subtitle={subtitle}
                text={text}
                buttonLink={buttonLink}
                buttonText={buttonText}
              />
            </S.Card>
          )
        )}
    </S.Cards>
  </S.Wrapper>
)

export default CardsModalities
