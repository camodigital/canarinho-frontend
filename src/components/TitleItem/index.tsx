import { toneProps } from 'types/tone'

import * as S from './styles'

export type TitleItemProps = toneProps & {
  title: string
}

const TitleItem = ({ tone, title }: TitleItemProps) => (
  <S.Wrapper tone={tone}>
    <h3>{title}</h3>
  </S.Wrapper>
)

export default TitleItem
