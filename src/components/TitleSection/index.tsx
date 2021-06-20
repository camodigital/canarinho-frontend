import ToneLastWord from 'components/ToneLastWord'
import { toneProps } from 'types/tone'
import * as S from './styles'

export type TitleSectionProps = toneProps & {
  title: string
  subtitle?: string
  dark: boolean
  withSubtitle?: boolean
}

const TitleSection = ({
  title = 'Title Section',
  withSubtitle = false,
  subtitle,
  tone,
  dark
}: TitleSectionProps) => (
  <S.Wrapper>
    <S.Title tone={tone} dark={dark}>
      <ToneLastWord>{title}</ToneLastWord>
    </S.Title>

    {withSubtitle && (
      <S.Subtitle tone={tone} dark={dark}>
        {subtitle}
      </S.Subtitle>
    )}
  </S.Wrapper>
)

export default TitleSection
