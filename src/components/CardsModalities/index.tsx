import CardModalities, { CardModalitiesProps } from 'components/CardModalities'

import * as S from './styles'

export type CardsModalitiesProps = {
  cardsModalities: CardModalitiesProps[]
}

const CardsModalities = ({ cardsModalities }: CardsModalitiesProps) => (
  <S.Wrapper>
    <S.Cards>
      {!!cardsModalities &&
        cardsModalities.map(
          ({ tone, icon, title, subtitle, text, link }, index) => (
            <S.Card key={'CardsModalities' + index}>
              <CardModalities
                tone={tone}
                icon={icon}
                title={title}
                subtitle={subtitle}
                text={text}
                link={link}
              />
            </S.Card>
          )
        )}
    </S.Cards>
  </S.Wrapper>
)

export default CardsModalities
