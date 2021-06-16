import ActiveLink from '../ActiveLink'
import * as S from './styles'

import IconbtnTextLineLeft from 'components/Icons/IconbtnTextLineLeft'
import IconbtnTextLineRight from 'components/Icons/IconbtnTextLineRight'
import { toneProps } from 'types/tone'

export type ButtonTextProps = toneProps & {
  manner?: 'internal' | 'external' | 'function'
  size?: 'normal' | 'big'
  name: string
  link?: string
  buttonTextFunction?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonText = ({
  manner = 'external',
  tone = 'primary',
  size = 'normal',
  link = '#',
  name = 'button',
  buttonTextFunction = () => ''
}: ButtonTextProps) => (
  <S.Wrapper>
    <S.Button tone={tone} size={size}>
      <S.LineLeft tone={tone} size={size}>
        <IconbtnTextLineLeft />
      </S.LineLeft>

      {manner === 'internal' && (
        <ActiveLink href={link}>
          <a>{name}</a>
        </ActiveLink>
      )}

      {manner === 'external' && (
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      )}

      {manner === 'function' && (
        <button onClick={buttonTextFunction}>{name}</button>
      )}

      <S.LineRight tone={tone} size={size}>
        <IconbtnTextLineRight />
      </S.LineRight>
    </S.Button>
  </S.Wrapper>
)

export default ButtonText
