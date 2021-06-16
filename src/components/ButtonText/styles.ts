import styled, { css } from 'styled-components'
import { ButtonTextProps } from '.'
import { fontS2, fontS4 } from 'styles/theme/mixins/_fontSize'
import { toneBG, toneBGHover } from 'styles/theme/mixins/_tone'
import { boxShadowLG } from 'styles/theme/mixins/_shadows'

export type WrapperProps = Pick<ButtonTextProps, 'tone' | 'size'>

export const Wrapper = styled.div`
  display: inline-block;
`

export const Button = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    display: inline-block;

    position: relative;

    a,
    button {
      padding: ${size === 'normal' ? theme.spacings.s3 : theme.spacings.s4}
        ${size === 'normal' ? theme.spacings.s6 : theme.spacings.s8};

      display: block;

      ${size === 'normal' ? fontS2 : fontS4};

      border-radius: ${size === 'normal'
        ? theme.borders.radius.lg
        : theme.borders.radius.xl};

      ${boxShadowLG(theme.colors.blackAlpha2)};

      font-family: ${theme.fonts.family.featured};
      text-decoration: none;
      line-height: ${theme.fonts.lineHeights.none};
      color: ${theme.colors.white};

      ${toneBG};

      &:hover {
        color: ${theme.colors.gray.s100};

        ${boxShadowLG(theme.colors.blackAlpha1)};

        ${toneBGHover}
      }
    }

    svg {
      width: ${size === 'normal' ? '11px' : '15px'};

      transition: 0.5s ease-in-out;
    }

    &:hover {
      svg {
        width: ${size === 'normal' ? '11px' : '15px'};

        opacity: 0.6;
      }
    }
  `}
`

export const LineLeft = styled.div<WrapperProps>`
  ${({ size }) => css`
    display: inline-block;

    position: absolute;
    top: ${size === 'normal' ? '3.5px' : '5px'};
    left: ${size === 'normal' ? '3px' : '5px'};

    pointer-events: none;
  `}
`

export const LineRight = styled.div<WrapperProps>`
  ${({ size }) => css`
    display: inline-block;

    position: absolute;
    bottom: ${size === 'normal' ? '-2px' : '-1px'};
    right: ${size === 'normal' ? '3px' : '3px'};

    pointer-events: none;
  `}
`
