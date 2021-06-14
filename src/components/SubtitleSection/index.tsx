import * as S from './styles'

export type SubtitleSectionProps = {
  text: string
}

const SubtitleSection = ({ text }: SubtitleSectionProps) => (
  <S.Wrapper>{text}</S.Wrapper>
)

export default SubtitleSection
