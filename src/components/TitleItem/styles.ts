import styled, { css } from 'styled-components'
import { fontS4 } from 'styles/theme/mixins/_fontSize'
import { toneColor } from 'styles/theme/mixins/_tone'
import { TitleItemProps } from '.'

export const Wrapper = styled.div<TitleItemProps>`
  ${({ theme }) => css`
    ${fontS4};
    ${toneColor};
    font-family: ${theme.fonts.family.featured};
    font-weight: ${theme.fonts.weight.bold};
    letter-spacing: ${theme.fonts.letterSpacings.wide};
  `}
`
