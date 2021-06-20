import IconQuot from 'components/Icons/IconQuot'
import TextLimited from 'components/TextLimited'

import * as S from './styles'

export type CardTestimonialProps = {
  text: string
  name: string
}

const CardTestimonial = ({ text, name }: CardTestimonialProps) => (
  <S.Wrapper>
    <S.Quot>
      <IconQuot />
    </S.Quot>

    <S.Text>
      <TextLimited text={text} limit={200} />
    </S.Text>

    <S.Name>{name}</S.Name>
  </S.Wrapper>
)

export default CardTestimonial
