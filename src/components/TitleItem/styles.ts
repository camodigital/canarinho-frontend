import styled, { css } from 'styled-components'
import { fontS4 } from 'styles/theme/mixins/_fontSize'
import { TitleItemProps } from '.'

export type WrapperProps = Pick<TitleItemProps, 'tone'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, tone }) => css`
    ${fontS4};
    color: ${theme.colors[tone][`s500`]};
    font-family: ${theme.fonts.family.featured};
    font-weight: ${theme.fonts.weight.bold};
    letter-spacing: ${theme.fonts.letterSpacings.wide};
  `}
`
