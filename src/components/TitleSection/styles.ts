import styled, { css } from 'styled-components'
import { fontS7 } from 'styles/theme/mixins/_fontSize'
import { TitleSectionProps } from '.'

export type TitleProps = Pick<TitleSectionProps, 'dark' | 'tone'>

export const Wrapper = styled.div`
  text-align: center;
`

export const Title = styled.h2<TitleProps>`
  ${({ theme, dark, tone }) => css`
    margin-bottom: ${theme.spacings.s4};

    ${fontS7};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.family.featured};
    color: ${dark ? theme.colors.white : theme.colors.gray.s500};

    span {
      color: ${theme.colors[tone][`s500`]};
    }
  `}
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weight.bold};
  `}
`
