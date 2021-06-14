import ToneLastWord from 'components/ToneLastWord'
import { toneProps } from 'types/tone'
import * as S from './styles'

export type TitleSectionProps = toneProps & {
  text?: string
  dark: boolean
}

const TitleSection = ({
  text = 'Title Section',
  tone,
  dark
}: TitleSectionProps) => (
  <S.Wrapper tone={tone} dark={dark}>
    <ToneLastWord>{text}</ToneLastWord>
  </S.Wrapper>
)

export default TitleSection
