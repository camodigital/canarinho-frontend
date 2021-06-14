import { toneProps } from 'types/tone'
import * as S from './styles'

export type TextLogoProps = toneProps & {
  children: string
}

const TextLogo = ({ children, tone }: TextLogoProps) => (
  <S.Wrapper>
    <S.Text tone={tone}>{children}</S.Text>
  </S.Wrapper>
)

export default TextLogo
