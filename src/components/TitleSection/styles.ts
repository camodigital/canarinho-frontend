import styled, { css } from 'styled-components'
import { fontS7 } from 'styles/theme/mixins/_fontSize'
import { toneColor } from 'styles/theme/mixins/_tone'
import { TitleSectionProps } from '.'

export const Wrapper = styled.h2<TitleSectionProps>`
  ${({ theme, dark }) => css`
    ${fontS7};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.family.featured};
    color: ${dark ? theme.colors.white : theme.colors.gray.s500};

    span {
      ${toneColor};
    }
  `}
`
