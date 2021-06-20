import styled, { css } from 'styled-components'
import { fontS1 } from 'styles/theme/mixins/_fontSize'
import { CardModalitiesProps } from '.'
import media from 'styles/theme/mixins/_respondTo'
import { boxShadowLG } from 'styles/theme/mixins/_shadows'

export type WrapperProps = Pick<CardModalitiesProps, 'tone'>

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 400px;
    min-height: 155px;
    padding: ${theme.spacings.s6} ${theme.spacings.s1};

    border: 1px solid ${theme.colors.gray.s15};
    border-radius: ${theme.borders.radius.sm};

    background-color: ${theme.colors.white};

    a {
      text-decoration: none;
    }

    ${media.desktop} {
      padding: ${theme.spacings.s8} ${theme.spacings.s6};

      ${boxShadowLG(theme.colors.blackAlpha1)};
    }
  `}
`

export const Icon = styled.div<WrapperProps>`
  ${({ theme, tone }) => css`
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.s6};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.borders.radius.full};

    background-color: ${tone === 'primary'
      ? theme.colors.primary.s100
      : tone === 'secondary'
      ? theme.colors.secondary.s100
      : theme.colors.tertiary.s100};

    img {
      transform: scale(0.8);
    }

    ${media.tablet} {
      width: 65px;
      height: 65px;

      img {
        transform: scale(1.2);
      }
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    text-align: center;

    ${media.tablet} {
      margin-bottom: ${theme.spacings.s1};
    }
  `}
`

export const Subtitle = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};

    text-align: center;
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s1} ${theme.spacings.s4};
    display: grid;
    grid-template-columns: 1fr 30px;
    grid-template-rows: auto;

    border-radius: ${theme.borders.radius.xl};

    background-color: ${theme.colors.gray.s15};
  `}
`

export const ButtonText = styled.div`
  ${({ theme }) => css`
    ${fontS1};
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: ${theme.fonts.weight.bold};
  `}
`

export const ButtonIcon = styled.div``
