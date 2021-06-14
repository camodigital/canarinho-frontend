import * as S from './styles'

export type TextSmallProps = {
  text?: string
}

const TextSmall = ({ text }: TextSmallProps) => (
  <S.Wrapper>
    <span>{text}</span>
  </S.Wrapper>
)

export default TextSmall
