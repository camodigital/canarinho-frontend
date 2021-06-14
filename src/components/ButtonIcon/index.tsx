import IconButtonArrowLeft from 'components/Icons/IconButtonArrowLeft'
import IconButtonArrowRight from 'components/Icons/IconButtonArrowRight'
import IconButtonClose from 'components/Icons/IconButtonClose'
import { toneProps } from 'types/tone'
import ActiveLink from '../ActiveLink'

import * as S from './styles'

export type ButtonIconProps = toneProps & {
  icon?: 'arrowLeft' | 'arrowRight' | 'close'
  manner?: 'internal' | 'external' | 'funtion' | 'simple'
  size: 'small' | 'medium' | 'big'
  link?: string
  func?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonIcon = ({
  tone,
  icon,
  manner,
  link = '#',
  func = () => '',
  size
}: ButtonIconProps) => {
  return (
    <S.Wrapper tone={tone} size={size}>
      {manner === 'internal' ? (
        <ActiveLink href={link}>
          <a>
            {icon === 'arrowLeft' ? (
              <IconButtonArrowLeft />
            ) : icon === 'arrowRight' ? (
              <IconButtonArrowRight />
            ) : (
              <IconButtonClose />
            )}
          </a>
        </ActiveLink>
      ) : manner === 'external' ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon === 'arrowLeft' ? (
            <IconButtonArrowLeft />
          ) : icon === 'arrowRight' ? (
            <IconButtonArrowRight />
          ) : (
            <IconButtonClose />
          )}
        </a>
      ) : manner === 'funtion' ? (
        <button onClick={func}>
          {icon === 'arrowLeft' ? (
            <IconButtonArrowLeft />
          ) : icon === 'arrowRight' ? (
            <IconButtonArrowRight />
          ) : (
            <IconButtonClose />
          )}
        </button>
      ) : (
        <button>
          {icon === 'arrowLeft' ? (
            <IconButtonArrowLeft />
          ) : icon === 'arrowRight' ? (
            <IconButtonArrowRight />
          ) : (
            <IconButtonClose />
          )}
        </button>
      )}
    </S.Wrapper>
  )
}

export default ButtonIcon
