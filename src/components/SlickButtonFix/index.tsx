/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './styles'

export type SlickButtonFixProps = {
  currentSlide?: number
  slideCount?: number
  children: React.ReactNode
}

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: SlickButtonFixProps) => <S.Wrapper {...props}>{children}</S.Wrapper>

export default SlickButtonFix
